package com.lindsaySenia.springbootecommerce.service;

import com.lindsaySenia.springbootecommerce.dto.Purchase;
import com.lindsaySenia.springbootecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
