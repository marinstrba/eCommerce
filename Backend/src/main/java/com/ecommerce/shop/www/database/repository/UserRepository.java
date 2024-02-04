package com.ecommerce.shop.www.database.repository;

import com.ecommerce.shop.www.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
