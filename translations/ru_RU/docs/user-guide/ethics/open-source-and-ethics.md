# Этика и Открытый код

## Что такое Открытый код?

Открытый код означает что код лежит в открытом доступе и может использоваться, редактироваться и распространяться кем угодно. Это способствует публичной и совместной разработке ПО. Есть ряд важных вещей, которые следует принять во внимание при разработке ПО с открытым кодом.

### Лицензии

Репозиторий на GitHub _без_ лицензии **не является** открытым так как

> без лицензии автоматически применяются стандартные авторские права а это значит что никто не может воспроизводить, использовать или создавать на его основе другие работы.
>
> _источник: https\://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#choosing-the-right-license_

Это значит, что если вы действительно хотите оставить код своих модов открытым, то вам придется выбрать правильную лицензию.
This might sound scary, but it really doesn't have to be. GitHub created a very simple and nice website to find a
license that fits your project: https\://choosealicense.com/

!> **Obligatory "we are not lawyers". Our interpretation of these licenses is primarily based off of the `choosealicense`
website, as well as personal experience.**

We recommend going with one of the following two licenses for mods:

- [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/) -- the main benefit of this license is
  that anyone using your mod's code (be it as a spin-off version, updated version, or in other games) will _have_ to use
  this license as well. This means your work, and any derivative work, will remain open-source. It means people can't
  grab your work and create a version which has no public code, and it means the community will forever be able to build
  upon your work and keep your mod alive, even if you lose interest in it.
- [MIT License](https://choosealicense.com/licenses/mit/) -- this is a more permissive version of the GNU General Public
  License. It _also_ allows users to create _closed-source_ versions of your mod. This means a user is not required to
  share their updated code publicly. They must, however, still retain the original license's copyright notice readily
  available.

### Healthy collaboration

A modding community thrives when users help each other out. Keeping your mods open-source means current (and future)
modders can learn from your current work, and perhaps even keep your mods updated if you ever leave the community.

It is, however, important to be ethical about this. We understand a modding community can get competitive. Please,
refrain from taking code and claiming it as your own - always properly give credit where credit is due.

Likewise, when other users help you by fixing bugs, and want to submit a pull request, please accept that, rather
than taking the fix and implementing it yourself - this gives them some credit for the fix, and fosters a community
where people aren't afraid to help out.
