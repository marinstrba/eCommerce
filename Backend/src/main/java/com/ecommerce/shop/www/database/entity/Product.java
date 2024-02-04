package com.ecommerce.shop.www.database.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="product")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private Double price;
    @Column(name = "stock_quantity")
    private Integer stockQuantity;
    @Column(name = "product_category")
    private String productCategory;
    @Column(name = "image_url")
    private String imageUrl;
    @OneToMany(mappedBy = "product")
    private Set<OrderDetails> orderDetailsSet = new HashSet<>();
    @OneToMany(mappedBy = "product")
    private Set<Review> reviews = new HashSet<>();
}
