export interface Patient {
    resourceType: string;
    id: string;
    meta: PacientMeta;
    type: string;
    link: Link[];
    entry: Entry[];
}

export interface Entry {
    fullUrl: string;
    resource: Resource;
    search: Search;
}

export interface Resource {
    resourceType: ResourceType;
    id: string;
    meta: ResourceMeta;
    text: Text;
    identifier?: Identifier[];
    name: Name[];
    telecom?: Telecom[];
    gender?: string;
    birthDate?: Date;
    address?: Address[];
}

export interface Address {
    use?: string;
    text?: string;
    line: string[];
    city: string;
    state?: string;
    postalCode: string;
    country: string;
    extension?: Extension[];
}

export interface Extension {
    url: string;
    valueString: string;
}

export interface Identifier {
    system?: string;
    value: string;
    type?: Type;
}

export interface Type {
    coding: Coding[];
}

export interface Coding {
    system: string;
    code: Code;
}

export enum Code {
    Mr = "MR",
}

export interface ResourceMeta {
    versionId: string;
    lastUpdated: Date;
    source: string;
}

export interface Name {
    use?: string;
    family: string;
    given: string[];
}

export enum ResourceType {
    Patient = "Patient",
}

export interface Telecom {
    system: string;
    value: string;
    use: string;
}

export interface Text {
    status: Status;
    div: string;
}

export enum Status {
    Generated = "generated",
}

export interface Search {
    mode: Mode;
}

export enum Mode {
    Match = "match",
}

export interface Link {
    relation: string;
    url: string;
}

export interface PacientMeta {
    lastUpdated: Date;
}
