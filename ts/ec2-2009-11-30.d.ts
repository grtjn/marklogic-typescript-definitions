// Type definitions for EC2Module
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/ec2-2009-11-30.xml

/**
The Elastic Compute Cloud (EC2) API module contains functions that allow you to write scripts to 
  configure EC2. 	
EC2 is installed as the following file:
install_dir/Modules/MarkLogic/ec2-2009-11-30.xqy 
 
where install_dir is the directory in which 
   MarkLogic Server is installed.
 To use the ec2-2009-11-30.xqy module in your own XQuery modules, 
    include the following line in your XQuery prolog:

   import module namespace ec2 = "http://marklogic.com/ec2" 
           at "/MarkLogic/ec2-2009-11-30.xqy";  
The library uses the ec2: namespace, which is 
   not predefined in the server.
MarkLogic recommends enabling the URI Lexicon when using 
    EC2; the URI lexicon will improve performance, 
   especially when the database grows to a large number of documents.
**/

declare module EC2Module {

  interface ec2 {

    /** This function calls the Amazon DescribeImages function. **/
    describeImages(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, imageIds?: xs:string, executableBy?: xs:string, owners?: xs:string): node();

    /** This function calls the Amazon DescribeAvailabilityZones function. **/
    describeAvailabilityZones(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, zoneName?: xs:string): node();

    /** This function calls the Amazon DescribeRegions function. **/
    describeRegions(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, regionNames?: xs:string): node();

    /** This function calls the Amazon AttachVolume function. **/
    attachVolume(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, volumeId: xs:string, instanceId: xs:string, device: xs:string): node();

    /** This function calls the Amazon CreateSnapshot function. **/
    createSnapshot(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, volumeId: xs:string, description?: xs:string): node();

    /** This function calls the Amazon CreateVolume function without a SnapshotId parameter. **/
    createVolume(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, availabilityZone: xs:string, size: xs:integer): node();

    /** This function calls the Amazon CreateVolume function with a $snapshot-id parameter. **/
    createVolumeFromSnapshot(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, availabilityZone: xs:string, snapshotId: xs:string, size?: xs:integer): node();

    /** This function calls the Amazon DeleteSnapshot function. **/
    deleteSnapshot(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotId: xs:string): node();

    /** This function calls the Amazon DeleteVolume function. **/
    deleteVolume(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, volumeId: xs:string): node();

    /** This function calls the Amazon DescribeSnapshotAttribute function and passes createVolumePermission as the Attribute parameter. **/
    describeSnapshotCreateVolumePermission(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string): node();

    /** This function calls the Amazon DescribeSnapshots function. **/
    describeSnapshots(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds?: xs:string, owners?: xs:string, restorableBys?: xs:string): node();

    /** This function calls the Amazon DescribeVolumes function. **/
    describeVolumes(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, volumeIds?: xs:string): node();

    /** This function calls the Amazon DetachVolume function. **/
    detachVolume(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, volumeId: xs:string, instanceId?: xs:string, device?: xs:string, force?: xs:boolean): node();

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    addSnapshotCreateVolumePermissionUsers(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string, userIds: xs:string): node();

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    addSnapshotCreateVolumePermissionGroups(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string, userGroups: xs:string): node();

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    removeSnapshotCreateVolumePermissionUsers(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string, userIds: xs:string): node();

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    removeSnapshotCreateVolumePermissionGroups(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string, userGroups: xs:string): node();

    /** This function calls the Amazon ResetSnapshotAttribute function. **/
    resetSnapshotCreateVolumePermission(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, snapshotIds: xs:string): node();

    /** This function calls the Amazon AllocateAddress function. **/
    allocateAddress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string): node();

    /** This function calls the Amazon AssociateAddress function. **/
    associateAddress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, publicIp: xs:string, instanceId: xs:string): node();

    /** This function calls the Amazon DescribeAddresses function. **/
    describeAddresses(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, publicIps?: xs:string): node();

    /** This function calls the Amazon DisassociateAddress function. **/
    disassociateAddress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, publicIp: xs:string): node();

    /** This function calls the Amazon ReleaseAddress function. **/
    releaseAddress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, publicIp: xs:string): node();

    /** This function calls the Amazon GetConsoleOutput function. **/
    getConsoleOutput(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
    describeInstanceBlockDeviceMapping(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
    describeInstanceDisableApiTermination(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
    describeInstanceInitiatedShutdownBehavior(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes kernel as the Attribute parameter. **/
    describeInstanceKernel(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    describeInstanceRamdisk(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
    describeInstanceRootDeviceName(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceType as the Attribute parameter. **/
    describeInstanceType(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstanceAttribute function and passes userData as the Attribute parameter. **/
    describeInstanceUserData(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon DescribeInstances function. **/
    describeInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds?: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
    modifyInstanceBlockDeviceMapping(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
    modifyInstanceDisableApiTermination(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:boolean): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
    modifyInstanceInitiatedShutdownBehavior(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes kernel as the Attribute parameter. **/
    modifyInstanceKernel(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    modifyInstanceRamdisk(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
    modifyInstanceRootDeviceName(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceType as the Attribute parameter. **/
    modifyInstanceType(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon ModifyInstanceAttribute function and passes userData as the Attribute parameter. **/
    modifyInstanceUserData(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceId: xs:string, value: xs:string): node();

    /** This function calls the Amazon RebootInstances function. **/
    rebootInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon ResetInstanceAttribute function and passes kernel as the Attribute parameter. **/
    resetInstanceKernel(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon ResetInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    resetInstanceRamdisk(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon RunInstances function. **/
    runInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, imageId: xs:string, minCount: xs:integer, maxCount: xs:integer, instanceType: xs:string, keyPair: xs:string, securityGroup: xs:string, instanceOptions: xs:string): node();

    /** This function calls the Amazon StartInstances function. **/
    startInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon StopInstances function. **/
    stopInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string, force: xs:boolean): node();

    /** This function calls the Amazon TerminateInstances function. **/
    terminateInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon CreateKeyPair function. **/
    createKeyPair(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, keyName: xs:string): node();

    /** This function calls the Amazon DeleteKeyPair function. **/
    deleteKeyPair(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, keyName: xs:string): node();

    /** This function calls the Amazon DescribeKeyPairs function. **/
    describeKeyPairs(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, keyNames?: xs:string): node();

    /** This function calls the Amazon MonitorInstances function. **/
    monitorInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon UnmonitorInstances function. **/
    unmonitorInstances(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, instanceIds: xs:string): node();

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function. **/
    authorizeGroupIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, sourceGroupOwnerId: xs:string, sourceGroupName: xs:string): node();

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes icmp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeIcmpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, icmpType: xs:integer, icmpCode: xs:integer, cidrIp: xs:string): node();

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes tcp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeTcpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, portRange: xs:integer, cidrIp: xs:string): node();

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes udp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeUdpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, portRange: xs:integer, cidrIp: xs:string): node();

    /** This function calls the Amazon CreateSecurityGroup function. **/
    createSecurityGroup(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, groupDescription: xs:string): node();

    /** This function calls the Amazon DeleteSecurityGroup function. **/
    deleteSecurityGroup(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string): node();

    /** This function calls the Amazon DescribeSecurityGroups function. **/
    describeSecurityGroups(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupNames?: xs:string): node();

    /** This function calls the Amazon RevokeSecurityGroupIngress function and sets the UserId and GroupName parameters. **/
    revokeGroupIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, sourceGroupOwnerId: xs:string, sourceGroupName: xs:string): node();

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes icmp as the IpProtocol parameter, and sets the FromPort, ToPort, and CidrIp parameters. **/
    revokeIcmpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, icmpType: xs:integer, icmpCode: xs:integer, cidrIp: xs:string): node();

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes tcp as the IpProtocol parameter. **/
    revokeTcpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, portRange: xs:integer, cidrIp: xs:string): node();

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes udp as the IpProtocol parameter. **/
    revokeUdpIngress(accessKey: xs:string, secretKey: xs:string, ec2Region: xs:string, groupName: xs:string, portRange: xs:integer, cidrIp: xs:string): node();


  }
}
