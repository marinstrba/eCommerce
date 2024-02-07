package com.ecommerce.shop.www.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private String productName;
    private String description;
    private Double price;
    private Integer stockQuantity;
    private String productCategory;
    private String imageUrl;
}
