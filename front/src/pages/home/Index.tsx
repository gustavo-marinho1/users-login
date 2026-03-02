import { products } from "../../lib/products";
import { ProductCard } from "../../components/products/product-card";

function Home() {
  return (
    <>      
      <section className=" py-20 md:py-30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl mb-4 tracking-tight">
              Minimalist Fashion,<br />Maximum Style
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-background-secondary">
        {/* Products Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 py-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home