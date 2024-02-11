package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByProductName(String productName);
    long countByProductCategory (String productCategory);
}
