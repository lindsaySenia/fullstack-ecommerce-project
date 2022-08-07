package com.lindsaySenia.springbootecommerce.dao;

import com.lindsaySenia.springbootecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    // behind the scenes query similar to:
    // SELECT * FROM Customer c WHERE c.email = theEmail
    // returns null if not found
    Customer findByEmail(String theEmail);
}
