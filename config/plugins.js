module.exports = () => ({
  upload: {
    provider: "to-firebase",
    providerOptions: {
      serviceAccount: {
        type: "service_account",
        project_id: "commt-lab-assistant",
        private_key_id: "bb1290e0e974b6c17f98d1941583c59cc3e747dd",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPOgvz5AyH25MJ\nDDvAA3YmSPi7icMyo6Zudg/dZg0UXhRiYr5ttXKvas/Z/ku+X/t2hF5BhKi26hEA\nGxO+kvBdVmd3hMzVoiOgj8MW3nlQC0eM9kesOYmsACWiy60HHpW/OlNygRx5TyIe\nYkxU6GTEyDQugJ3uPxwxkezxMC6uhHRrxiizR/MoTwxWfNxc8a7nf2VE2T6HZijG\nHHmWoG0MwSCS+qzSeo513+Em5hj2lb53u0kExbbqGQ7F3YELU5oCKJfB6J3ydXGW\nvM7nRn4TtkkVZqQfMvwoQJAlvJof5G2qGTxn6fv7RhR+fH6EfRxXhymanE6QvNLV\n2YUBfat7AgMBAAECggEAFcUuXkf1/QvXTZsIZ+q1Ld56qxEU/avtnysuDX9cHmin\n0ZI4GUR3sPASt/8cK/rfaxsK3+004EqE0LMHhvze3Z9nLUo5TrRC8+pGf4+NxRf6\nQ1fYPcKpsPUu/wRQwC+5YaaZ/6yKtj/XAMQo6r6jX3z85mnCrbXZm2eOMeRy8whs\n3HFAtr0viHsS10iciWK40i9QEFpVO1/ZjHAQU2CRBEYFzFDR4aO5/EdFWQbzFvVo\nsKZMOQ1XBRJ5NO9zdKQ+Pbfg3fd11zul8TnuHA6XiYV0S0jlgRwxiKcyI0Vxd+cQ\no3Wb3DSSJyhXj8ClMTInEIxkm7YgwQE5TTT7O+gSAQKBgQDtGUHtR5lVrc38dN/x\nlTzQtj0LxNnFQLAehYehzTF5IeU3dcwMztrJdOsfhVJCsBsOUGZVpLvIF1XEsKhY\nL7NGMH/Pt29zepYANpJlcOF/FWludRwAVeT9SSm0WgRNBRmn5A078yiXC+ueI9iA\npYJKEz6OWaSAzNJTJAE6gpR5AQKBgQDfvyiu+8Rk0zxWVBSTjPLq4ALLvIQUyIxv\nmbjFEVkTMZQI2uZ77iW2zMehiCI9pT0ECOFIBrS+4UhkPnSdfssXZjK0tj5GvPn8\nCHUZQsJpvU5PnH3sCAFWxqureoeHGJ2c9xTD0ZVk8fAOnKsrf+RQ/rxZXObU0zLh\nneeX/N+IewKBgQCfUeeREBmjDyVpTQfmiAfTn4Gp1N8Ywv0VpViciwuBgBtMhyVU\nPfOah6wvBCFgmoGzvqblScq9C6EgiCy3BWaL9a8M3xBPIsKE5ia9b3q3MKYmCR+F\nwjIbWPxjKlHVh2XUAVQ7Qou149ax7xheadkA+amBcg8uVXPHVlxU+sXWAQKBgCWU\n9kBuCY7l7DyT4uDly+enuNB/2a+j//K+30o6n7uZmEPkgNJQLgWGYAHB2/5+wsDq\nvOxcM//b10z/MJdDtNk5UUsJUWyQUW0D/qc/j2gzY/P7VStQLOlmdW9YJWuLtu2m\nktZRXcaW3LuXlSi5UqBIKVrZP+x/jQxYeY4N634BAoGAVe6mDTPLZCPODReNWvtc\nF58XV3IKK2hXXIpXCAxZjv+yjd4SqIZcOUAr5Rsr9/4pVHAUoimjXHTMad9cymx3\nyjd2SLM9QivK/jMKn1UpmDwSMeVH2wftUVu4LQRY4iavcP7vkXvKqOjHOuwOgizO\nO6kXgCmoZncqYnxcL49ox1c=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-y0z69@commt-lab-assistant.iam.gserviceaccount.com",
        client_id: "111436736765546486334",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y0z69%40commt-lab-assistant.iam.gserviceaccount.com"
      },
      bucket: "commt-lab-assistant.appspot.com",
      debugLogs: true,
    }
  }
})
