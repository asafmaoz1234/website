# My website
<div>
    <p><a href="https://asafmaoz.com">asafmaoz.com</a> </p>
    <p>My personal website, a place to showcase my projects and resume.</p>
</div>
<div>
    <h2>Why did set up a site?</h2>
    <p><strong>Great question</strong>. I'm a backend developer with 10+ years experience, why do I need a website?</p>
    <p>Well, Over the years, I've been doing some small after hours projects and using technologies I don't use at work (or use in a different way, and I found
    that doing these projects is much more fun and interesting if I have a real world usage for them, and much more binding to complete the project if i have
    a place to showcase them, And a website is a great way to showcase them.</p>
    <p>Actually, This website is also a small project, Setting up a secure serverless website with complete CI/CD and a dev env for feature branches.
    was a great learning experience, and I'm sure I'll use this knowledge in the future.</p>
</div>

<div>
    <h2>How the site is set up and used resources:</h2>
    <ul>
        <li><p>Serverless, Hosted on AWS.</p></li>
        <li><p>S3 holds the files as a static website, cloudfront accelerates content delivery.</p></li>
        <li>github actions for CI-CD to production</li>
        <li>complete dev env set up for feature branches.</li>
    </ul>
        <dl>
            <dt>Route 53</dt>
            <dd>- Route requests and set up access roles</dd>
            <dt>AWS certificate manager (ACM)</dt>
            <dd>- Generate SSL certificate for the site and specific subdomains</dd>
            <dt>AWS cloudfront</dt>
            <dd>- Distribution to deliver the content from S3</dd>
            <dd>- Alternate domain to show the content asafmaoz.com</dd>
            <dd>- Using the certificate generated.</dd>
            <dt>S3</dt>
            <dd>- Bucket for the files in this repo, set up for static website hosting</dd>
            <dd>- Hold cloudfront distribution logs</dd>
        </dl>
        <p>
            <img src="https://asafmaoz.com/images/websiteSysDesign.png" alt="">
        </p>
   <p>The HTML-CSS was mostly crafted using Relume, Figma and Webflow.</p>
  
</div>
