package com.ecommerce.shop.www.service;

import com.ecommerce.shop.www.DTO.ProductDTO;
import com.ecommerce.shop.www.database.entity.Product;
import com.ecommerce.shop.www.database.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public void addProductToShop(ProductDTO productDTO){
        Product product = new Product();
        product.setProductName(productDTO.getProductName());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());
        product.setProductCategory(productDTO.getProductCategory());
        product.setImageUrl(productDTO.getImageUrl());
        product.setStockQuantity(productDTO.getStockQuantity());
        productRepository.save(product);
    }

    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream().map(product -> mapToProductDTO(product)).toList();
    }

    public void removeProductFromStock(String name){
       Product product = findProductByName(name);
       productRepository.delete(product);
    }

    public long getNumberOfProducts() {
        return productRepository.count();
    }

    public long countProductsByCategory(String category) {
        return productRepository.countByProductCategory(category);
    }

    private static ProductDTO mapToProductDTO(Product product){
        ProductDTO productDTO = ProductDTO.builder()
                .productName(product.getProductName())
                .description(product.getDescription())
                .price(product.getPrice())
                .stockQuantity(product.getStockQuantity())
                .productCategory(product.getProductCategory())
                .imageUrl(product.getImageUrl())
                .build();
        return productDTO;
    }

    private Product findProductByName(String name){
        return productRepository.findByProductName(name).orElseThrow(() -> new IllegalArgumentException("Product does not exist."));
    }

}
