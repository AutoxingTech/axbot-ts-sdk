// Copyright (c) 2026 Autoxing Technology
// SPDX-License-Identifier: MIT

export type Subscriber<T> = (items: T) => void;

import { robotApi } from './robotApi';
import type { BagItem, MapItem, CoreDumpItem, MappingTaskItem, VideoFileItem, DeviceInfo } from './robotApiType';

export type FetchFn<T> = () => Promise<T>;

export class ObjectStore<T> {
  protected stored_object: T | null = null;
  protected subscribers = new Set<Subscriber<T | null>>();

  constructor(protected fetchData: FetchFn<T | null>) {}

  protected notify(): void {
    for (const s of Array.from(this.subscribers)) {
      try {
        s(this.stored_object);
      } catch (err) {
        // ignore subscriber errors
      }
    }
  }

  getObject(): T | null {
    return this.stored_object;
  }

  setObject(items: T | null): void {
    this.stored_object = items;
    this.notify();
  }

  clear(): void {
    this.stored_object = null;
    this.notify();
  }

  subscribe(fn: Subscriber<T | null>): () => void {
    this.subscribers.add(fn);
    try {
      fn(this.stored_object);
    } catch (err) {
      // ignore
    }
    return () => {
      this.subscribers.delete(fn);
    };
  }

  async refresh(): Promise<T | null> {
    this.stored_object = await this.fetchData();
    this.notify();
    return this.stored_object;
  }
}

export class ArrayObjectStore<T> {
  protected stored_object: T[] = [];
  protected subscribers = new Set<Subscriber<T[]>>();

  constructor(protected fetchData: FetchFn<T[]>) {}

  protected notify(): void {
    for (const s of Array.from(this.subscribers)) {
      try {
        s(this.stored_object);
      } catch (err) {
        // ignore subscriber errors
      }
    }
  }

  getObjects(): T[] {
    return this.stored_object;
  }

  setObjects(items: T[]): void {
    this.stored_object = items.slice();
    this.notify();
  }

  clear(): void {
    this.stored_object = [];
    this.notify();
  }

  subscribe(fn: Subscriber<T[]>): () => void {
    this.subscribers.add(fn);
    try {
      fn(this.stored_object);
    } catch (err) {
      // ignore
    }
    return () => {
      this.subscribers.delete(fn);
    };
  }

  async refresh(): Promise<T[]> {
    const data = await this.fetchData();
    this.stored_object = Array.isArray(data) ? data.slice() : [];
    this.notify();
    return this.stored_object;
  }
}

class DeviceInfoStore extends ObjectStore<DeviceInfo> {}

class RosTopicNamesStore extends ArrayObjectStore<string> {
  private forkliftTopics = [
    '/horizontal_laser_2d/matched',
    '/left_laser_2d/matched',
    '/right_laser_2d/matched',
    '/rb_laser_2d/matched',
    '/matched_depth_points/downward',
    '/matched_depth_points/backward',
  ];

  private defaultTopics = [
    '/horizontal_laser_2d/matched',
    '/bottom_laser_2d/matched',
    '/matched_depth_points/downward',
    '/matched_depth_points/forward',
  ];

  private lonyuTopics = [
    '/head_laser_3d/scan',
    '/lf_laser_3d/scan',
    '/rb_laser_3d/scan',
    '/lf_laser_2d/scan',
    '/rb_laser_2d/scan',
  ];

  private process(topics: string[]): string[] {
    if (!Array.isArray(topics)) return [];

    const deviceInfo = deviceInfoStore.getObject();
    const model = deviceInfo?.device?.model;
    let supplement: string[];
    if (model?.startsWith('forklift')) {
      supplement = this.forkliftTopics;
    } else if (model?.startsWith('lonyu')) {
      supplement = this.lonyuTopics;
    } else {
      supplement = this.defaultTopics;
    }

    const result = topics.slice();
    for (const t of supplement) {
      if (!result.includes(t)) {
        result.push(t);
      }
    }
    return result;
  }

  setObjects(items: string[]): void {
    super.setObjects(this.process(items));
  }

  async refresh(): Promise<string[]> {
    let topics: string[];
    try {
      const data = await this.fetchData();
      topics = Array.isArray(data) ? data.slice() : [];
      // API succeeded — store raw topics without supplementing
      this.stored_object = topics;
      this.notify();
      return this.stored_object;
    } catch {
      // API failed (e.g. 404) — supplement with model-specific defaults
      topics = [];
    }
    this.stored_object = this.process(topics);
    this.notify();
    return this.stored_object;
  }
}

export const bagListStore = new ArrayObjectStore<BagItem>(() => robotApi.getBags());
export const mapListStore = new ArrayObjectStore<MapItem>(() => robotApi.getMaps());
export const mappingTaskListStore = new ArrayObjectStore<MappingTaskItem>(() => robotApi.getMappingTasks());
export const videoListStore = new ArrayObjectStore<VideoFileItem>(() => robotApi.getVideos());
export const alertTriggeredBagStore = new ArrayObjectStore<BagItem>(() => robotApi.getRecordings());
export const deviceInfoStore = new DeviceInfoStore(() => robotApi.getDeviceInfo());
export const coreDumpStore = new ArrayObjectStore<CoreDumpItem>(() => robotApi.getCoreDumps());
export const rosTopicNamesStore = new RosTopicNamesStore(() => robotApi.getPublishedTopicNames());
