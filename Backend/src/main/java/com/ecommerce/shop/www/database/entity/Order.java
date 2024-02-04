package com.ecommerce.shop.www.database.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "order")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "order_id")
    private Long orderId;
    @Column(name = "user_id")
    private User user;
    @Column(name = "order_date")
    private Date orderDate;
    @Column(name = "order_status")
    private OrderStatus orderStatus;
    @Column(name = "price")
    private Double price;
}
