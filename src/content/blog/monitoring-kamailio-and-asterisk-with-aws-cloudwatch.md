---
title: 'Monitoring Kamailio and Asterisk with AWS CloudWatch'
description: |
  Here are the steps to test Kamailio under load.
pubDate: 'Mar 23 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_t66ztuZRAz.png'
---
Today I'm announcing the release to my new project VOIP Statistics to AWS CloudWatch (voip-mon-aws-cloudwatch), it is a monitoring script for Kamailio and Asterisk for AWS CloudWatch written in PHP.

This works similarly to AWS CloudWatch Monitoring Script (Linux).

Requirements
- PHP 5.5 and above
- Composer
- Asterisk
- Kamailio


## Installation

Git clone to any Linux instance with Kamailio or Asterisk installed

```bash
# git clone https://github.com/rpfilomeno/voip-mon-aws-cloudwatch.git
```

Go to the project's root directory by

```bash
# cd voip-mon-aws-cloudwatch
```

Make the mon-put-instance-data.php executable
```bash
# sudo chmod +x mon-put-instance-data.php
```

Install Composer
```bash
# curl -sS https://getcomposer.org/installer | php
```

Install the dependencies by
```bash
# php composer.phar install
```

Create your AWS credentials file

## Monitoring Kamailio

Test the script for monitoring Kamailio with
```bash
./mon-put-instance-data.php stats --t kamailio
```

Install to Crontab with
```bash
crontab -e */5 * * * * php /home/ec2-user/voip-mon-aws-cloudwatch/mon-put-instance-data.php stats --s kamailio
```

## Monitoring Asterisk
Test the script for monitoring Kamailio with
```bash
./mon-put-instance-data.php stats --t asterisk
```

Install to Crontab with
```bash
crontab -e */5 * * * * php /home/ec2-user/voip-mon-aws-cloudwatch/mon-put-instance-data.php stats --s asterisk
```