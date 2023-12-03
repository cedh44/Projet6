package com.openclassrooms.mddapi.security;

import org.springframework.security.oauth2.jwt.*;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

@Service
public class JwtUtils {
    private final JwtEncoder encoder;
    private final JwtDecoder decoder;

    public JwtUtils(JwtEncoder jwtEncoder, JwtDecoder jwtDecoder) {
        this.encoder = jwtEncoder;
        this.decoder = jwtDecoder;
    }

    public String generateToken(String authenticationEmail) {
        Instant now = Instant.now();
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("self")
                .issuedAt(now)
                .expiresAt(now.plus(8, ChronoUnit.HOURS)) //Token expires in 8 hours
                .subject(authenticationEmail)
                //.claim("scope", scope)
                .build();
        return this.encoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
}
