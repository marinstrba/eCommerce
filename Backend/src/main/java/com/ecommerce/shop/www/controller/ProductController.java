package com.ecommerce.shop.www.controller;

import com.ecommerce.shop.www.DTO.ProductDTO;
import com.ecommerce.shop.www.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.OK)
    public void addProduct(@RequestBody ProductDTO productDTO){
        productService.addProductToShop(productDTO);
    }

    @GetMapping("/get")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> getProduct(){
        return productService.getAllProducts();
    }
}
