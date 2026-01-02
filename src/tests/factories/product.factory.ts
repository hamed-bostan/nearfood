import { ProductType } from "@/application/schemas/product.schema";

export function createProduct(overrides?: Partial<ProductType>): ProductType {
  return {
    id: "prod_1",
    category: "پیتزاها",
    title: "پیتزا مخصوص",
    description: "توضیح تست",
    price: 120_000,
    discount: 10,
    score: 4.5,
    mostsale: false,
    image: "/test.png",
    createdAt: new Date(),
    ...overrides,
  };
}
