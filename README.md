
# Cisco Switch Basic Configuration

## 1. Rename Host
To rename the switch, use the following commands:
```bash
Switch> enable          # Enter privileged exec mode
Switch# configure terminal  # Enter global configuration mode
Switch(config)# hostname <new-hostname>  # Set the switch name
```

## 2. IP Address Configuration
Assign an IP address to a VLAN interface (usually VLAN 1 for management):
```bash
Switch(config)# interface vlan 1       # Select VLAN 1
Switch(config-if)# ip address <IP-address> <subnet-mask>  # Set IP address
Switch(config-if)# no shutdown         # Enable the interface
```

## 3. Creation of Users and Secret
Create users and set their passwords:
```bash
Switch(config)# username <username> secret <password>  # Create user with encrypted password
```

## 4. Privilege for Users
Assign privilege levels to users (for example, level 15 for full access):
```bash
Switch(config)# username <username> privilege 15 secret <password>
```

## 5. Configuration of VLANs
Create VLANs and assign them to interfaces:
```bash
Switch(config)# vlan <VLAN-ID>        # Create a new VLAN
Switch(config-vlan)# name <VLAN-name>  # Name the VLAN
Switch(config-vlan)# exit

Switch(config)# interface <interface-id>  # Select an interface (e.g., gig0/1)
Switch(config-if)# switchport mode access   # Set the port as an access port
Switch(config-if)# switchport access vlan <VLAN-ID>  # Assign VLAN to port
```

## 6. SSH Configuration
Configure SSH for secure remote access:
```bash
Switch(config)# ip domain-name <your-domain>         # Set the domain name
Switch(config)# crypto key generate rsa              # Generate RSA key
Switch(config)# ip ssh version 2                     # Enable SSH version 2
Switch(config)# line vty 0 4                         # Access VTY lines for SSH
Switch(config-line)# transport input ssh             # Enable SSH only
Switch(config-line)# login local                     # Use local login credentials
```

## 7. Console and Line Console Password
Set a password for console and VTY access:
```bash
Switch(config)# line console 0             # Configure console password
Switch(config-line)# password <password>
Switch(config-line)# login                 # Enable password login

Switch(config)# line vty 0 4               # Configure VTY password (telnet/SSH)
Switch(config-line)# password <password>
Switch(config-line)# login
```

## Save Configuration
Don't forget to save the configuration to ensure it persists after reboot:
```bash
Switch# write memory
```

This setup ensures basic functionality and security for the switch.
