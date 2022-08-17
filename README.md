# My website

<div>
    <p align="center">https://asafmaoz.com </p>
    <ul>
        <li>
        <p>Serverless, Hosted on AWS.</p>
        <p>S3 holds the files as a static webisite, cloudfront accelerates content delievery.</p>
        <dl>
            <dt>Route 53</dt>
            <dd>- Route requests and set up access roles</dd>
            <dt>AWS certificate manager (ACM)</dt>
            <dd>- Generate SSL certificate for the site and specific subdomains</dd>
            <dt>AWS cloudfront</dt>
            <dd>- Distribution to deliever the content from S3</dd>
            <dd>- Alternte domain to show the content asafmaoz.com</dd>
            <dd>- Using the certificate generated.</dd>
            <dt>S3</dt>
            <dd>- Bucket for the files in this repo, set up for static website hosting</dd>
            <dd>- Hold cloudfront distribution logs</dd>
        </dl>
        </li>
        <p align="center">
            <img src="https://github.com/asafmaoz1234/website/blob/main/images/site_setup_architecture.png">
        </p>
<li>    <p>The main HTML-CSS is from several free resume template I tweaked and combined into one.</p></li>
    </ul>
</div>
