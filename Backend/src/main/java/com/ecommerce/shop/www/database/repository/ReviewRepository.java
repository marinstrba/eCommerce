package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
