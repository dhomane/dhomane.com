<?php
  // Retired. This endpoint is no longer wired to the contact form —
  // the site is static (Vercel) and can't execute PHP anyway.
  // The contact form now posts to FormSubmit.co instead; see index.html.
  //
  // Note: an earlier version of this file had a mailbox password
  // committed in plaintext. That credential should be treated as
  // compromised and rotated if it hasn't been already.
  http_response_code(410);
  echo 'Gone';
