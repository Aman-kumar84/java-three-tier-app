package com.example.app.service;

import com.example.app.model.Product;
import com.example.app.repository.ProductRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public Product getProduct(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product createProduct(Product product) {
        return repository.save(product);
    }

    public Product updateProduct(Long id, Product product) {
        Product existing = getProduct(id);
        existing.setName(product.getName());
        existing.setPrice(product.getPrice());
        return repository.save(existing);
    }

    public void deleteProduct(Long id) {
        repository.deleteById(id);
    }
}