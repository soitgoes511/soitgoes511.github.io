---
layout: single
title:  "Broken virtual environments: Why it happened and how I should have prevented it"
date:   2021-07-06 15:00:00
categories: linux update python venv broken prevention 
---
Approximately 3-4 days ago, I updated my Linux box (**Pop!_OS** version 20.10 -> 21.04). 
I have run Linux long enough to know that there could be unintended issues during
these major version updates. My first defense against possible headaches is to wait for
a few days and hope others find the bugs, report them and everything gets ironed out quickly.
Years ago I was not as cautious :see_no_evil:, but I no longer have the luxury of time to bang my head
into a desk for days and slog through issues or re-compile kernels. I just play it safe now.

The good news is that despite a drastic change to the Pop!_OS desktop environment
(from **GNOME 3.38.4** to **COSMIC**), the update and upgrade went very smoothly. The new DE
is an improvement on GNOME, my system is very responsive, the stars all aligned and
everything is perfect. Kudos to the system76 team :thumbsup:. But.. Not everything
was perfect...

### What exactly was the problem?

Let me begin by saying that my issue has nothing to do with my updated OS. I decided
yesterday that I wanted to update a Heroku application which lives in a local repository
on my now updated workstation. This application was written in Python and the interpreter executed within a 
virtual environment (venv). Virtual environments should be self contained, correct? 
Sounds safe right :skull:? What happened was that the OS upgrade replaced my pre-existing system python (3.8) with
a newer python version (3.9). Had I sourced a standalone python install when creating the
virtual environment, or had the OS just switched PYTHON_TARGETS, then I would not be
writing this right now. I had created the venv like so for this particular Heroku application:

`soitgoes@pop-os:~$ python3 -m venv venv`

The above command created said virtual environment inside a directory called venv with a symbolic link
pointing from the venv interpreter to my system python interpreter @ /usr/bin/python3.8 which no longer existed :disappointed::

`lrwxrwxrwx 1 soitgoes soitgoes    6 Jun 17 21:38 python3.8 -> python`

At my previous work, I had many python versions installed on a dev mount to avoid this very issue. 

### How to fix the issue and my steps moving forward ...

Install a standalone development python which lives seperately and isolated from my system python. This
would avoid the pain I am enduring now when my system is updated again with a new python install. 
I have no excuse for dropping the ball like this but it is what it is. Lesson learned.
Steps to remedy the situation, starting with that isolated python install:

1. Download desired python version `$ wget https://www.python.org/ftp/python/3.8.11/Python-3`
2. Uncompress the python version   `$ tar -xzvf Python-3.8.11.tgz`
3. Change into directory           `$ cd Python-3.8.11/`
4. Configure with target location  `$ ./configure --prefix=/home/soitgoes/python-3.8.11`
5. Compile and build               `$ make`
6. Test build                      `$ make test`
7. Install python to target location  `$ make altinstall`

I can see that the above steps were successful by executing the newly installed
interpreter which was specified in my target location above (/home/soitgoes/python-3.8.11)
:

`soitgoes@pop-os:~$ ~/python-3.8.11/bin/python3.8`

And voilà... The REPL (**R**ead, **E**valuate, **P**rint, **L**oop) prompt appears reflecting
my desired version:

    Python 3.8.11 (default, Jul  6 2021, 22:44:39)
    [GCC 10.3.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>>

My system python has been unchanged and I can verify this very easily:

    soitgoes@pop-os:~$ which python3
    /usr/bin/python3
    soitgoes@pop-os:~$ python3
    Python 3.9.5 (default, May 11 2021, 08:20:37)
    [GCC 10.3.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>>

Please notice the versioning differences. The next step in this process will be to
rebuild the symbolic links in the affected virtual environment. Please make note that
the python3 symlink points to the system /usr/bin/python3 (which is the issue since it
is now python 3.9 rather than 3.8). The other symlinks just chain all the python 
aliases together: python -> python3 which I just mentioned points to the system python
install. Finally, the last link is python3.9 -> python3 again:

    lrwxrwxrwx 1 soitgoes soitgoes    7 Jul  4 22:58 python -> python3
    lrwxrwxrwx 1 soitgoes soitgoes   16 Jul  4 22:58 python3 -> /usr/bin/python3
    lrwxrwxrwx 1 soitgoes soitgoes    7 Jul  4 22:58 python3.9 -> python3

These soft links need to be re-directed to my newly built and installed python which
is now located in my home directory. I can do this simply by changing into the affected
venv/bin/ directory where the symlinks are present and then:

`$ ln -sf /home/soitgoes/python-3.8.11/bin/python3.8 python3`

The symlinks are now corrected. When activating the previously affected venv, and
running the python interpreter I am greeted with version 3.8.11 rather than 3.9.5.
My application will again run without the need of rebuilding all of my dependencies.
Since this is fixed and it is getting late, I will need to actually do what I set out
to do initially (update my Heroku app) later. Enough problems solved for one day.

**The moral of the story is to ensure you seperate your system dependencies from your
development dependencies. No sense in muddying the waters and causing unnecessary
headaches.** :heavy_check_mark:

> The mind is not a vessel to be filled, but a fire to be kindled.
> _― Plutarch_
