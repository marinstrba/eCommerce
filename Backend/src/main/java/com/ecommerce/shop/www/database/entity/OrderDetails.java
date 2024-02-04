package com.ecommerce.shop.www.database.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_details")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_details_id")
    private Long orderDetailsId;
    @Column(name = "order_id")
    private Order order;
    @Column(name = "product_id")
    private Product product;
    @Column (name = "quantity")
    private Integer quantity;
    @Column (name = "total_price")
    private Double totalPrice;
}
