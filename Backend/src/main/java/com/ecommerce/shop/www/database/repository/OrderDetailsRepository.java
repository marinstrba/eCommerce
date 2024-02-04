package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
}
