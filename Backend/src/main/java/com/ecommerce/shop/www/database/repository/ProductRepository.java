package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
