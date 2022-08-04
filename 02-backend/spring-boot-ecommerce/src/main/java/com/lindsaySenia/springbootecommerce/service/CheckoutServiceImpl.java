package com.lindsaySenia.springbootecommerce.service;

import com.lindsaySenia.springbootecommerce.dao.CustomerRepository;
import com.lindsaySenia.springbootecommerce.dto.Purchase;
import com.lindsaySenia.springbootecommerce.dto.PurchaseResponse;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    // @Autowired optional
    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public PurchaseResponse placeOrder(Purchase purchase) {
        return null;
    }
}
