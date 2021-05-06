import Folder from "./Folder";
import { Photo } from "./Photo";

interface Project {
  readonly folder: Folder;
  readonly primaryImage: Photo;
}

export default Project;
