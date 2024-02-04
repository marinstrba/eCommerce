package com.ecommerce.shop.www.database.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(name = "order_date")
    private Date orderDate;
    @Column(name = "order_status")
    private OrderStatus orderStatus;
    @Column(name = "price")
    private Double price;
    @OneToMany(mappedBy = "order")
    private Set<OrderDetails> orderDetails = new HashSet<>();
}
