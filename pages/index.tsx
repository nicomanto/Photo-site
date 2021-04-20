import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>Folder list</h1>
    <ListGroup>
      <ListGroup.Item key="photo">
        <Link href="/photoListFolder/photo">Photo folder</Link>
      </ListGroup.Item>
      <ListGroup.Item key="place">
        <Link href="/photoListFolder/place">Place folder</Link>
      </ListGroup.Item>
    </ListGroup>
  </Layout>
);

export default IndexPage;
