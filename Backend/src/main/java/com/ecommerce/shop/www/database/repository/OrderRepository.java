package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
