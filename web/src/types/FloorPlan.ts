import { ContentType } from "./enums/ContentType";
import { ResourceType } from "./enums/ResourceType";

export interface FloorPlan {
    id: number;
    guid: string;
    resourceType: ResourceType;
    isPublic: boolean;
    description: null;
    filename: string;
    sizeInByte: null;
    contentType: ContentType;
    url: string;
    urlMedium: null | string;
    urlSmall: null | string;
    textContent: null;
}