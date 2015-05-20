// Type definitions for EC2Module
// Definitions: 

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
    describeImages(accessKey: String, secretKey: String, ec2Region: String, imageIds?: String, executableBy?: String, owners?: String): Node;

    /** This function calls the Amazon DescribeAvailabilityZones function. **/
    describeAvailabilityZones(accessKey: String, secretKey: String, ec2Region: String, zoneName?: String): Node;

    /** This function calls the Amazon DescribeRegions function. **/
    describeRegions(accessKey: String, secretKey: String, ec2Region: String, regionNames?: String): Node;

    /** This function calls the Amazon AttachVolume function. **/
    attachVolume(accessKey: String, secretKey: String, ec2Region: String, volumeId: String, instanceId: String, device: String): Node;

    /** This function calls the Amazon CreateSnapshot function. **/
    createSnapshot(accessKey: String, secretKey: String, ec2Region: String, volumeId: String, description?: String): Node;

    /** This function calls the Amazon CreateVolume function without a SnapshotId parameter. **/
    createVolume(accessKey: String, secretKey: String, ec2Region: String, availabilityZone: String, size: Number): Node;

    /** This function calls the Amazon CreateVolume function with a $snapshot-id parameter. **/
    createVolumeFromSnapshot(accessKey: String, secretKey: String, ec2Region: String, availabilityZone: String, snapshotId: String, size?: Number): Node;

    /** This function calls the Amazon DeleteSnapshot function. **/
    deleteSnapshot(accessKey: String, secretKey: String, ec2Region: String, snapshotId: String): Node;

    /** This function calls the Amazon DeleteVolume function. **/
    deleteVolume(accessKey: String, secretKey: String, ec2Region: String, volumeId: String): Node;

    /** This function calls the Amazon DescribeSnapshotAttribute function and passes createVolumePermission as the Attribute parameter. **/
    describeSnapshotCreateVolumePermission(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String): Node;

    /** This function calls the Amazon DescribeSnapshots function. **/
    describeSnapshots(accessKey: String, secretKey: String, ec2Region: String, snapshotIds?: String, owners?: String, restorableBys?: String): Node;

    /** This function calls the Amazon DescribeVolumes function. **/
    describeVolumes(accessKey: String, secretKey: String, ec2Region: String, volumeIds?: String): Node;

    /** This function calls the Amazon DetachVolume function. **/
    detachVolume(accessKey: String, secretKey: String, ec2Region: String, volumeId: String, instanceId?: String, device?: String, force?: Object): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    addSnapshotCreateVolumePermissionUsers(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String, userIds: String): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    addSnapshotCreateVolumePermissionGroups(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String, userGroups: String): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    removeSnapshotCreateVolumePermissionUsers(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String, userIds: String): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
    removeSnapshotCreateVolumePermissionGroups(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String, userGroups: String): Node;

    /** This function calls the Amazon ResetSnapshotAttribute function. **/
    resetSnapshotCreateVolumePermission(accessKey: String, secretKey: String, ec2Region: String, snapshotIds: String): Node;

    /** This function calls the Amazon AllocateAddress function. **/
    allocateAddress(accessKey: String, secretKey: String, ec2Region: String): Node;

    /** This function calls the Amazon AssociateAddress function. **/
    associateAddress(accessKey: String, secretKey: String, ec2Region: String, publicIp: String, instanceId: String): Node;

    /** This function calls the Amazon DescribeAddresses function. **/
    describeAddresses(accessKey: String, secretKey: String, ec2Region: String, publicIps?: String): Node;

    /** This function calls the Amazon DisassociateAddress function. **/
    disassociateAddress(accessKey: String, secretKey: String, ec2Region: String, publicIp: String): Node;

    /** This function calls the Amazon ReleaseAddress function. **/
    releaseAddress(accessKey: String, secretKey: String, ec2Region: String, publicIp: String): Node;

    /** This function calls the Amazon GetConsoleOutput function. **/
    getConsoleOutput(accessKey: String, secretKey: String, ec2Region: String, instanceId: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
    describeInstanceBlockDeviceMapping(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
    describeInstanceDisableApiTermination(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
    describeInstanceInitiatedShutdownBehavior(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes kernel as the Attribute parameter. **/
    describeInstanceKernel(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    describeInstanceRamdisk(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
    describeInstanceRootDeviceName(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceType as the Attribute parameter. **/
    describeInstanceType(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes userData as the Attribute parameter. **/
    describeInstanceUserData(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon DescribeInstances function. **/
    describeInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds?: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
    modifyInstanceBlockDeviceMapping(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
    modifyInstanceDisableApiTermination(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: Object): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
    modifyInstanceInitiatedShutdownBehavior(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes kernel as the Attribute parameter. **/
    modifyInstanceKernel(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    modifyInstanceRamdisk(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
    modifyInstanceRootDeviceName(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceType as the Attribute parameter. **/
    modifyInstanceType(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes userData as the Attribute parameter. **/
    modifyInstanceUserData(accessKey: String, secretKey: String, ec2Region: String, instanceId: String, value: String): Node;

    /** This function calls the Amazon RebootInstances function. **/
    rebootInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon ResetInstanceAttribute function and passes kernel as the Attribute parameter. **/
    resetInstanceKernel(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon ResetInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
    resetInstanceRamdisk(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon RunInstances function. **/
    runInstances(accessKey: String, secretKey: String, ec2Region: String, imageId: String, minCount: Number, maxCount: Number, instanceType: String, keyPair: String, securityGroup: String, instanceOptions: String): Node;

    /** This function calls the Amazon StartInstances function. **/
    startInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon StopInstances function. **/
    stopInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String, force: Object): Node;

    /** This function calls the Amazon TerminateInstances function. **/
    terminateInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon CreateKeyPair function. **/
    createKeyPair(accessKey: String, secretKey: String, ec2Region: String, keyName: String): Node;

    /** This function calls the Amazon DeleteKeyPair function. **/
    deleteKeyPair(accessKey: String, secretKey: String, ec2Region: String, keyName: String): Node;

    /** This function calls the Amazon DescribeKeyPairs function. **/
    describeKeyPairs(accessKey: String, secretKey: String, ec2Region: String, keyNames?: String): Node;

    /** This function calls the Amazon MonitorInstances function. **/
    monitorInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon UnmonitorInstances function. **/
    unmonitorInstances(accessKey: String, secretKey: String, ec2Region: String, instanceIds: String): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function. **/
    authorizeGroupIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, sourceGroupOwnerId: String, sourceGroupName: String): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes icmp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeIcmpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, icmpType: Number, icmpCode: Number, cidrIp: String): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes tcp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeTcpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, portRange: Number, cidrIp: String): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes udp as the IpPermissions.n.IpProtocol parameter. **/
    authorizeUdpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, portRange: Number, cidrIp: String): Node;

    /** This function calls the Amazon CreateSecurityGroup function. **/
    createSecurityGroup(accessKey: String, secretKey: String, ec2Region: String, groupName: String, groupDescription: String): Node;

    /** This function calls the Amazon DeleteSecurityGroup function. **/
    deleteSecurityGroup(accessKey: String, secretKey: String, ec2Region: String, groupName: String): Node;

    /** This function calls the Amazon DescribeSecurityGroups function. **/
    describeSecurityGroups(accessKey: String, secretKey: String, ec2Region: String, groupNames?: String): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function and sets the UserId and GroupName parameters. **/
    revokeGroupIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, sourceGroupOwnerId: String, sourceGroupName: String): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes icmp as the IpProtocol parameter, and sets the FromPort, ToPort, and CidrIp parameters. **/
    revokeIcmpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, icmpType: Number, icmpCode: Number, cidrIp: String): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes tcp as the IpProtocol parameter. **/
    revokeTcpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, portRange: Number, cidrIp: String): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes udp as the IpProtocol parameter. **/
    revokeUdpIngress(accessKey: String, secretKey: String, ec2Region: String, groupName: String, portRange: Number, cidrIp: String): Node;


  }
}
