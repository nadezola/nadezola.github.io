---
layout: post
title:  "GPG Encoding"
date:   2024-05-20 12:56:52
categories: cybersecurity
---

## Unlocking the Power of GPG Encoding for Secure Data Transfering

In an era where data breaches and privacy concerns are widespread,
keeping our data transfering secure has never been more important. 
One powerful tool that stands out in this field is GPG encryption.

### What is GPG?

GNU Privacy Guard (GPG) is a free, open-source software that allows you 
to sign your data to ensure that your files are secure from 
unauthorized access.

GPG uses a combination of symmetric and asymmetric encryption.
This hybrid approach leverages the strengths of both encryption 
methods to provide robust security.

**Symmetric Encryption (by itself is rarely used)**

The same key (secret-key) is used for both encrypting and decrypting data. 
This key must be kept secret and shared only between the parties involved 
in the communication. 

Features:
* Efficiency - algorithms are generally faster than asymmetric ones, thereby suitable for encrypting large amounts of data.
* Simplicity - a single key simplifies the encryption and decryption process.
* Security - depends heavily on keeping the secret key confidential. 


**Asymmetric Encryption**

Asymmetric encryption uses a pair of keys: a public key and a private key.
The keys are different but mathematically related.
If data was encrypted with a certain public key, only the owner of 
the corresponding private key can decrypt it:

<img src="/assets/posts/gpg-1.jpg" width="400"/>

Features:
* Distribution - the puiblic key can be distributed widely, eliminating the need for 
secure distribution channels.
* Security - the private key cannot be derived from public key.


**Hybrid Encryption**

GPG encryption is a combination of symmetric and asymmetric encryption. 
This hybrid approach leverages the strengths of both encryption methods.


### How GPG works

Imagine: you want to receive data from your partner securely, 
then your partner is the encryptor and you are the decryptor.
 
* Anyone who wants to decrypt data (you) must generate a pair of private and public keys. 
* Keep the private key on your computer secure, and send the public key to your partner (the encryptor).\
_Note:_ The same pair of keys you can use for different partners (encryptors). 
* With your public key your partner encrypts data. 
Only the owner of the corresponding private key (you) will be able to access the encrypted data.\
_Note:_ Data can be encrypted with multiple public keys for several decrypters (not only for you).


### Generating a gpg private & public key pair (Linux)

* ```bash
  gpg --gen-key
  ```
  or
* ```bash
  gpg --full-generate-key   # for additional settings such as expired data
  ``` 


### Viewing a key pair in the console
* ```bash
  gpg --list-keys
  gpg --export -a <key-id> 
  gpg --export-secret-key -a <key-id>
  ``` 

### Export keys to a file
* ```bash
  gpg --export -a <key-id> > public.key
  gpg --export-secret-key -a <key-id> > private.key
  ``` 
or
* ```bash
  gpg --export -a -o public.key <key-id>
  gpg --export-secret-key -a -o private.key <key-id>
  ``` 
_Note:_ Now, the public-key can be sent to the encryptor. 

### Decrypting a File
* ```bash
  gpg -d <encrypted_input.file> > <decrypted_output.file>
  ``` 