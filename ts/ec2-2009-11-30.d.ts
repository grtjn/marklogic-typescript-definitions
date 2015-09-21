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

interface ec2Functions {

    /** This function calls the Amazon DescribeImages function. **/
  describeImages(accessKey: string, secretKey: string, ec2Region: string, imageIds?: string, executableBy?: string, owners?: string): Node;

    /** This function calls the Amazon DescribeAvailabilityZones function. **/
  describeAvailabilityZones(accessKey: string, secretKey: string, ec2Region: string, zoneName?: string): Node;

    /** This function calls the Amazon DescribeRegions function. **/
  describeRegions(accessKey: string, secretKey: string, ec2Region: string, regionNames?: string): Node;

    /** This function calls the Amazon AttachVolume function. **/
  attachVolume(accessKey: string, secretKey: string, ec2Region: string, volumeId: string, instanceId: string, device: string): Node;

    /** This function calls the Amazon CreateSnapshot function. **/
  createSnapshot(accessKey: string, secretKey: string, ec2Region: string, volumeId: string, description?: string): Node;

    /** This function calls the Amazon CreateVolume function without a SnapshotId parameter. **/
  createVolume(accessKey: string, secretKey: string, ec2Region: string, availabilityZone: string, size: number): Node;

    /** This function calls the Amazon CreateVolume function with a $snapshot-id parameter. **/
  createVolumeFromSnapshot(accessKey: string, secretKey: string, ec2Region: string, availabilityZone: string, snapshotId: string, size?: number): Node;

    /** This function calls the Amazon DeleteSnapshot function. **/
  deleteSnapshot(accessKey: string, secretKey: string, ec2Region: string, snapshotId: string): Node;

    /** This function calls the Amazon DeleteVolume function. **/
  deleteVolume(accessKey: string, secretKey: string, ec2Region: string, volumeId: string): Node;

    /** This function calls the Amazon DescribeSnapshotAttribute function and passes createVolumePermission as the Attribute parameter. **/
  describeSnapshotCreateVolumePermission(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string): Node;

    /** This function calls the Amazon DescribeSnapshots function. **/
  describeSnapshots(accessKey: string, secretKey: string, ec2Region: string, snapshotIds?: string, owners?: string, restorableBys?: string): Node;

    /** This function calls the Amazon DescribeVolumes function. **/
  describeVolumes(accessKey: string, secretKey: string, ec2Region: string, volumeIds?: string): Node;

    /** This function calls the Amazon DetachVolume function. **/
  detachVolume(accessKey: string, secretKey: string, ec2Region: string, volumeId: string, instanceId?: string, device?: string, force?: Object): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
  addSnapshotCreateVolumePermissionUsers(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string, userIds: string): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be given permission to create the snapshot. This function sets add as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
  addSnapshotCreateVolumePermissionGroups(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string, userGroups: string): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the IDs of the users to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
  removeSnapshotCreateVolumePermissionUsers(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string, userIds: string): Node;

    /** This function calls the Amazon ModifySnapshotAttribute function and passes the names of the groups to be denied permission to create the snapshot. This function sets remove as the OperationType parameter and createVolumePermission as the Attribute parameter. **/
  removeSnapshotCreateVolumePermissionGroups(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string, userGroups: string): Node;

    /** This function calls the Amazon ResetSnapshotAttribute function. **/
  resetSnapshotCreateVolumePermission(accessKey: string, secretKey: string, ec2Region: string, snapshotIds: string): Node;

    /** This function calls the Amazon AllocateAddress function. **/
  allocateAddress(accessKey: string, secretKey: string, ec2Region: string): Node;

    /** This function calls the Amazon AssociateAddress function. **/
  associateAddress(accessKey: string, secretKey: string, ec2Region: string, publicIp: string, instanceId: string): Node;

    /** This function calls the Amazon DescribeAddresses function. **/
  describeAddresses(accessKey: string, secretKey: string, ec2Region: string, publicIps?: string): Node;

    /** This function calls the Amazon DisassociateAddress function. **/
  disassociateAddress(accessKey: string, secretKey: string, ec2Region: string, publicIp: string): Node;

    /** This function calls the Amazon ReleaseAddress function. **/
  releaseAddress(accessKey: string, secretKey: string, ec2Region: string, publicIp: string): Node;

    /** This function calls the Amazon GetConsoleOutput function. **/
  getConsoleOutput(accessKey: string, secretKey: string, ec2Region: string, instanceId: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
  describeInstanceBlockDeviceMapping(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
  describeInstanceDisableApiTermination(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
  describeInstanceInitiatedShutdownBehavior(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes kernel as the Attribute parameter. **/
  describeInstanceKernel(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
  describeInstanceRamdisk(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
  describeInstanceRootDeviceName(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes instanceType as the Attribute parameter. **/
  describeInstanceType(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstanceAttribute function and passes userData as the Attribute parameter. **/
  describeInstanceUserData(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon DescribeInstances function. **/
  describeInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds?: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes blockDeviceMapping as the Attribute parameter. **/
  modifyInstanceBlockDeviceMapping(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes disableApiTermination as the Attribute parameter. **/
  modifyInstanceDisableApiTermination(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: Object): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceInitiatedShutdownBehavior as the Attribute parameter. **/
  modifyInstanceInitiatedShutdownBehavior(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes kernel as the Attribute parameter. **/
  modifyInstanceKernel(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
  modifyInstanceRamdisk(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes rootDeviceName as the Attribute parameter. **/
  modifyInstanceRootDeviceName(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes instanceType as the Attribute parameter. **/
  modifyInstanceType(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon ModifyInstanceAttribute function and passes userData as the Attribute parameter. **/
  modifyInstanceUserData(accessKey: string, secretKey: string, ec2Region: string, instanceId: string, value: string): Node;

    /** This function calls the Amazon RebootInstances function. **/
  rebootInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon ResetInstanceAttribute function and passes kernel as the Attribute parameter. **/
  resetInstanceKernel(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon ResetInstanceAttribute function and passes ramdisk as the Attribute parameter. **/
  resetInstanceRamdisk(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon RunInstances function. **/
  runInstances(accessKey: string, secretKey: string, ec2Region: string, imageId: string, minCount: number, maxCount: number, instanceType: string, keyPair: string, securityGroup: string, instanceOptions: string): Node;

    /** This function calls the Amazon StartInstances function. **/
  startInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon StopInstances function. **/
  stopInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string, force: Object): Node;

    /** This function calls the Amazon TerminateInstances function. **/
  terminateInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon CreateKeyPair function. **/
  createKeyPair(accessKey: string, secretKey: string, ec2Region: string, keyName: string): Node;

    /** This function calls the Amazon DeleteKeyPair function. **/
  deleteKeyPair(accessKey: string, secretKey: string, ec2Region: string, keyName: string): Node;

    /** This function calls the Amazon DescribeKeyPairs function. **/
  describeKeyPairs(accessKey: string, secretKey: string, ec2Region: string, keyNames?: string): Node;

    /** This function calls the Amazon MonitorInstances function. **/
  monitorInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon UnmonitorInstances function. **/
  unmonitorInstances(accessKey: string, secretKey: string, ec2Region: string, instanceIds: string): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function. **/
  authorizeGroupIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, sourceGroupOwnerId: string, sourceGroupName: string): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes icmp as the IpPermissions.n.IpProtocol parameter. **/
  authorizeIcmpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, icmpType: number, icmpCode: number, cidrIp: string): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes tcp as the IpPermissions.n.IpProtocol parameter. **/
  authorizeTcpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, portRange: number, cidrIp: string): Node;

    /** This function calls the Amazon AuthorizeSecurityGroupIngress function and passes udp as the IpPermissions.n.IpProtocol parameter. **/
  authorizeUdpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, portRange: number, cidrIp: string): Node;

    /** This function calls the Amazon CreateSecurityGroup function. **/
  createSecurityGroup(accessKey: string, secretKey: string, ec2Region: string, groupName: string, groupDescription: string): Node;

    /** This function calls the Amazon DeleteSecurityGroup function. **/
  deleteSecurityGroup(accessKey: string, secretKey: string, ec2Region: string, groupName: string): Node;

    /** This function calls the Amazon DescribeSecurityGroups function. **/
  describeSecurityGroups(accessKey: string, secretKey: string, ec2Region: string, groupNames?: string): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function and sets the UserId and GroupName parameters. **/
  revokeGroupIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, sourceGroupOwnerId: string, sourceGroupName: string): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes icmp as the IpProtocol parameter, and sets the FromPort, ToPort, and CidrIp parameters. **/
  revokeIcmpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, icmpType: number, icmpCode: number, cidrIp: string): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes tcp as the IpProtocol parameter. **/
  revokeTcpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, portRange: number, cidrIp: string): Node;

    /** This function calls the Amazon RevokeSecurityGroupIngress function, passes udp as the IpProtocol parameter. **/
  revokeUdpIngress(accessKey: string, secretKey: string, ec2Region: string, groupName: string, portRange: number, cidrIp: string): Node;

}
declare var ec2:ec2Functions
