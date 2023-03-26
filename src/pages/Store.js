import {Row, Col} from 'react-bootstrap';
import {productsArray } from '../ProductsStore';
import ProductCard from "../components/ProductCard";

function Store() {

    return (
        <>
          <h1 class="align p-3">Welcome to the Store!</h1>
          <Row xs={1} md={3} className="g-4">
            {productsArray.map((product,index) => (
              <Col align="center" key={index}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </>
    )
}

export default Store;