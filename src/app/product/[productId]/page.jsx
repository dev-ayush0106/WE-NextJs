export default function ProductDetails({ params }) {
  const productId = params.productId;

  return (
    <div>
      <h1>Product Detail: Product {productId}</h1>
    </div>
  );
}
