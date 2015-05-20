// Type definitions for PKIModule
// Definitions: 

/**
     
      The PKI library manages public key infrastructure state in the security database. 
      All functions require that the caller have either a read or a write PKI 
      execute privilege (http://marklogic.com/xdmp/privileges/pki-read, 
      http://marklogic.com/xdmp/privileges/pki-write). All documents are in
      the PKI collection (http://marklogic.com/xdmp/pki).
      
      All of these functions automatically invoke against the appropriate 
      security database, and require that the user have the necessary 
      invoke/invoke-in privileges.
      
      The pki function module is installed as the following file: 
      install_dir/Modules/MarkLogic/pki.xqy
      where install_dir is the directory in which 
      MarkLogic Server is installed. To use the pki.xqy module in your own
      XQuery modules, include the following line in your XQuery prolog:
      import module namespace pki = "http://marklogic.com/xdmp/pki" 
                  at "/MarkLogic/pki.xqy";
      
      The library uses the pki: namespace, which is 
    not predefined in the server.
    **/

declare module PKIModule {

  interface pki {

    /** This function creates a new X.509 certificate request template. Each time a new certificate request is generated, a new public/private key pair is generated. A new random ID is generated and returned as part of the element. This ID is used for identifying this template and its related key pairs and certificates. The returned element must be separately inserted into the database with pki:insert-template. **/
    createTemplate(name: String, description: String, keyType: String, keyOptions: Node, csr: Req)): Template);

    /** This function inserts the specified certificate request template into the Security database and returns the certificate template id. **/
    insertTemplate(template: Template)): String;

    /** This function removes the specified certificate from the Security database. **/
    deleteCertificate(certificateId: String): void;

    /** This function removes the specified certificate request template from the Security database. **/
    deleteTemplate(templateId: String): void;

    /** This function returns the id of the specified certificate template. **/
    templateGetId(template: Template)): String;

    /** This function returns the name of the specified certificate template. **/
    templateGetName(template: Template)): String;

    /** This function changes the name of the specified certificate template and returns the XML containing the change. Use pki:insert-template to save the change to the Security database. **/
    templateSetName(template: Template), name: String): Template);

    /** This function returns the description of the specified certificate template. **/
    templateGetDescription(template: Template)): String;

    /** This function changes the description of the specified certificate template and returns the XML containing the change. Use pki:insert-template to save the change to the Security database. **/
    templateSetDescription(template: Template), description: String): Template);

    /** This function returns the key type for the specified certificate template. **/
    templateGetKeyType(template: Template)): String;

    /** This function changes the key type for the specified certificate template and returns the XML containing the change. Use pki:insert-template to save the change to the Security database. **/
    templateSetKeyType(template: Template), keyType: String): Template);

    /** This function returns the version number for the specified certificate template. **/
    templateGetVersion(template: Template)): String;

    /** This function returns all of the template key options set in the specified certificate template. **/
    templateGetKeyOptions(template: Template)): Key-options);

    /** This function sets the options for generating new keys in the specified certificate template. The returned element must be separately inserted into the database with pki:insert-template. **/
    templateSetKeyOptions(template: Template), keyOptions: Key-options)): Template);

    /** This function returns the request portion of the certificate template. **/
    templateGetRequest(template: Template)): Req);

    /** This function sets the request portion for the specified certificate template. Use pki:insert-template to save the change to the Security database. **/
    templateSetRequest(template: Template), req: Req)): Template);

    /** This function returns the ids for all of the certificate templates. **/
    getTemplateIds(): String;

    /** This function returns the certificate template for the specified id. **/
    getTemplate(templateId: String): Template);

    /** This function generates a PEM encoded X.509 certificate request from the template for the specified id. If $dns-name or $ip-addr are specified, those values will override any values specified in the template. A new public/private key pair is generated for the request and inserted as a temporary document in the database. When the signed certificate is inserted later, it is matched up against this document and any previously in use private key / certificate is replaced with the new one. The Admin UI will only set common-name, and leave both dns-name and ip-addr unspecified. Control over these values is provided only for power users to use through custom administration scripts. **/
    generateCertificateRequest(templateId: String, commonName: String, dnsName: String, ipAddr: String): String;

    /** This function returns any pending certificate requests for the specified template. The pending requests are returned as PEM encoded strings. **/
    getPendingCertificateRequestsPem(templateId: String): String;

    /** This function returns any pending certificate requests for the specified template. The pending requests are returned as XML. **/
    getPendingCertificateRequestsXml(templateId: String): Req);

    /** This function inserts one or more PEM-encoded signed certificates into the database. The signed certificates are matched up against previously generated certificate requests and any previous certificate is replaced. If there is no matching certifcate request for the specified certificate, the certificate is not inserted into the database. **/
    insertSignedCertificates(certs: String): void;

    /** This function inserts PEM-encoded certificates into the database without checking for a matching certificate request. This allows you to insert temporary certificates and those from new Certificate Authorities. **/
    insertTrustedCertificates(certs: String): String;

    /** This function returns the ids of all of the trusted certificates in the Security database. **/
    getTrustedCertificateIds(): String;

    /** This function returns the certificate for the specified template and host. The certificate data is returned in both PEM-encoded and XML formats. The common name must be specified. The DNS name and IP address are optional. **/
    getCertificate(templateId: String, commonName: String, dnsName: String, ipAddr: String): Certificate);

    /** This function inserts externally generated certificate into the database. This certificate can be used for certificate template specified by template-id. The common name of the certificate can be started with a wildcard "*" so that the certificate can be used for multiple hosts. **/
    insertHostCertificate(templateId: String, certs: String, pkey: String): void;

    /** This function returns true if the certificate specified by the template id and host combination are not signed by a trusted certificate authority. Otherwise, false is returned. The common name must be specified. The DNS name and IP address are optional. **/
    needCertificate(templateId: String, commonName: String, dnsName: String, ipAddr: String): Boolean;

    /** This function returns any pending certificate requests for the specified template id and host combination. The certificate request data is return in both PEM-encoded and XML formats. The common name must be specified. The DNS name and IP address are optional. **/
    getPendingCertificateRequest(templateId: String, commonName: String, dnsName: String, ipAddr: String): Request);

    /** This function generates a new key pair and temporary certificate from the specified certificate template. If a temporary certificate already exists for the template, this function does nothing. If $dns-name or $ip-addr are specified, those portions of the template are replaced with the specified values. The certificate is inserted into the database. This is used to ensure that secure app servers are initially usable while waiting for signed certificates. **/
    generateTemporaryCertificateIfNecessary(templateId: String, validFor: Number, commonName: String, dnsName: String, ipAddr: String): void;

    /** This function generates a new key pair and temporary certificate from the specified certificate template. If $dns-name or $ip-addr are specified, those portions of the template are replaced with the specified values. The certificate is inserted into the database. This is used to ensure that secure app servers are initially usable while waiting for signed certificates. **/
    generateTemporaryCertificate(templateId: String, validFor: Number, commonName: String, dnsName: String, ipAddr: String): void;

    /** This function returns true if the certificate is temporary. Otherwise, it returns false. **/
    isTemporary(cert: Certificate)): Boolean;

    /** This function returns the XML representation of the certificate for the specified id and common host name combination. **/
    getCertificateXml(templateId: String, hostname: String): Cert);

    /** This function returns all of the certificates for the specified certificate template in XML format. **/
    getCertificatesForTemplateXml(templateId: String): Cert);

    /** This function returns the PEM encoded certificate for the specified certificate template and common name combination. **/
    getCertificatePem(templateId: String, hostname: String): String;

    /** This function returns the certificate template with the specified name. **/
    getTemplateByName(templateName: String): Template);

    /** This function returns the certificate authority for the specified certificate template. **/
    getTemplateCertificateAuthority(templateId: String): Certificate);

    /** This function creates a common temporary certificate authority to sign all the certificates for the specified certificate template. **/
    generateTemplateCertificateAuthority(templateId: String, validFor: Number): void;

    /** This function returns the certificate data for the specified certificates. **/
    getCertificates(certId: String): Certificate);

    /** This function returns all of the certificates for the specified certificate template. **/
    getCertificatesForTemplate(templateId: String): Certificate);

    /** This function checks whether a certificate template is in use by an App Server. Returns true if the template is in use. Otherwise false is returned. **/
    templateInUse(templateId: String): Boolean;

    /** This function inserts a PEM- or DER-encoded Certificate Revocation List (CRL) into the security database. A CRL is a list of certificate serial numbers that have been revoked, and the revocation date of each. The CRL is signed by the Certificate Authority to verify its accuracy. The CRL contains two dates, one indicating when it was published and the other indicating when it will next be published. This is useful in determining whether a newer CRL should be fetched. Certificate Authorities typically allow the CRL to be downloaded via HTTP. The document URL in the database is derived from the URL passed in to the function, so Inserting a newer CRL retrieved from the same URL will replace the previous one in the database. **/
    insertCertificateRevocationList(url: String, crl: String): void;


  }
}
