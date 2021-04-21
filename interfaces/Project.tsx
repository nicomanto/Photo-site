import Photo from "./Photo";

interface Project {
  readonly folder: string;
  readonly description: string;
  readonly primaryImage: Photo;
}

export default Project;