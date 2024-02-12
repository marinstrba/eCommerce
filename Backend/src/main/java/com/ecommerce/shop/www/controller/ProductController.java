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
    public List<ProductDTO> getProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/get/{name}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO getProduct(@PathVariable String name){return productService.getProductByName(name);}

    @DeleteMapping("/remove/{name}")
    @ResponseStatus(HttpStatus.OK)
    public void removeProduct(@PathVariable String name) {productService.removeProductFromStock(name);}

    @GetMapping("/available")
    @ResponseStatus(HttpStatus.OK)
    public long numberOfProducts(){return productService.getNumberOfProducts();}

    @GetMapping("/available/{category}")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> getProductsByCategory(@PathVariable String category){return productService.getAllProductsByCategory(category);}

    @GetMapping("/available/category/{category}")
    @ResponseStatus(HttpStatus.OK)
    public long numberOfProductsByCategory(@PathVariable String category){return productService.countProductsByCategory(category);}


}
