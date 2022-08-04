package com.lindsaySenia.springbootecommerce.dao;

import com.lindsaySenia.springbootecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
