package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
