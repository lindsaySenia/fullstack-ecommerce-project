package com.lindsaySenia.springbootecommerce.dto;

import lombok.Data;
import lombok.NonNull;

// send back Java Object as JSON

@Data
public class PurchaseResponse {

    @NonNull
    private String orderTrackingNumber;
}
