# MEBT's Portfolio

This repository was created for use by CDC programs to collaborate on public health surveillance related projects in support of the CDC Surveillance Strategy.  Github is not hosted by the CDC, but is used by CDC and its partners to share information and collaborate on software.

## To add additional projects to the MEBT Directory

Edit [projects.json](https://github.com/CDCgov/MEBT/edit/master/projects.json). Add an entry to the bottom of the file, like so:

```json
...
  },
  {
    "name": "Our New Project",
    "description": "What it is/does, in one line",
    "codeURL": "https://github.com/CDCgov/OurNewProject/",
    "launchURL": "https://cdcgov.github.io/OurNewProject/demo/",
    "siteURL": "https://cdcgov.github.io/OurNewProject/",
    "technologies": [ "Browser" ],
    "imgURL": "imgs/ournewproject.png"
  }
]
```

The `codeURL` is typically the URL for the git repository.

The `launchURL` is a single URL that enables the user to begin using the product immediately. Some products (especially developer-facing tools like libraries) won't have a logical `launchURL`, so just give it an empty string.

The `siteURL` is a URL for a separate website other than the git repository or the app itself. This is for projects that you've set up a Github pages site (or something like that) to store developer documentation (again, or something like that). You probably won't have one, so just set it to the empty string.

`technologies` is an array. "Browser" refers to an app that's used in-browser. "Desktop" refers to an app that's installed (or runs portably) on the desktop. "Mobile" is for mobile apps. "Javascript" refers to a developer-facing Javascript Library, *not* anything written in Javascript (MicrobeTrace, for example, does not have a developer component; thus, though it's written in Javascript, it is only categorized as "Browser"). "R" is anything written in R, Java is anything written in Java, etc.

Add an image of your app to the imgs directory. If there's no way to make it pretty, just screenshot the github page or something. Then set `imgURL` to that filename. Note that this is a relative link, but an absolute link would also work, if you wish to hotlink something from elsewhere on the internet. I don't recommend this, as things on the 'net tend to disappear after awhile.

Commit and merge! The github site will update soon (several minutes) after.

## Public Domain
This repository constitutes a work of the United States Government and is not
subject to domestic copyright protection under 17 USC § 105. This repository is in
the public domain within the United States, and copyright and related rights in
the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
All contributions to this repository will be released under the CC0 dedication. By
submitting a pull request you are agreeing to comply with this waiver of
copyright interest.

## License
The repository utilizes code licensed under the terms of the Apache Software
License and therefore is licensed under ASL v2 or later.

This source code in this repository is free: you can redistribute it and/or modify it under
the terms of the Apache Software License version 2, or (at your option) any
later version.

This source code in this repository is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the Apache Software License for more details.

You should have received a copy of the Apache Software License along with this
program. If not, see http://www.apache.org/licenses/LICENSE-2.0.html

The source code forked from other open source projects will inherit its license.


## Privacy
This repository contains only non-sensitive, publicly available data and
information. All material and community participation is covered by the
Surveillance Platform [Disclaimer](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md)
and [Code of Conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
For more information about CDC's privacy policy, please visit [http://www.cdc.gov/privacy.html](http://www.cdc.gov/privacy.html).

## Contributing
Anyone is encouraged to contribute to the repository by [forking](https://help.github.com/articles/fork-a-repo)
and submitting a pull request. (If you are new to GitHub, you might start with a
[basic tutorial](https://help.github.com/articles/set-up-git).) By contributing
to this project, you grant a world-wide, royalty-free, perpetual, irrevocable,
non-exclusive, transferable license to all users under the terms of the
[Apache Software License v2](http://www.apache.org/licenses/LICENSE-2.0.html) or
later.

All comments, messages, pull requests, and other submissions received through
CDC including this GitHub page are subject to the [Presidential Records Act](http://www.archives.gov/about/laws/presidential-records.html)
and may be archived. Learn more at [http://www.cdc.gov/other/privacy.html](http://www.cdc.gov/other/privacy.html).

## Records
This repository is not a source of government records, but is a copy to increase
collaboration and collaborative potential. All government records will be
published through the [CDC web site](http://www.cdc.gov).

## Notices
Please refer to [CDC's Template Repository](https://github.com/CDCgov/template)
for more information about [contributing to this repository](https://github.com/CDCgov/template/blob/master/CONTRIBUTING.md),
[public domain notices and disclaimers](https://github.com/CDCgov/template/blob/master/DISCLAIMER.md),
and [code of conduct](https://github.com/CDCgov/template/blob/master/code-of-conduct.md).
