# 채보 작성
---

?> 동영상 튜토리얼을 선호하는 경우 NyxTheShield의 [생방송 다시보기](https://www.youtube.com/watch?v=ig27SlJveGs)를 시청하세요. 채보 작성의 모든 과정을 자세히 설명하고 있습니다.

## 기본
### Midi 에디터/DAW
채보는 Midi 파일을 만들고 [MIDI 컨버터](#converting-midi-to-map-file)를 사용하여 만들 수 있습니다.

Midi의 음표(노트)는 게임에 맞추어 47에서 73의 범위여야 합니다.<br>**참고:** Midi 에디터에 따라 이 범위는 달라질 수 있습니다.

일부 무료로 사용 가능한 Midi 에디터는 다음과 같습니다:
- [Reaper](https://www.reaper.fm/download.php)* (Range: B2-C#5)
- [LMMS](https://lmms.io/download#windows) (Range: B2-C#5)
- [FL Studio](https://www.image-line.com/fl-studio-download/)*† (Range: B3-C#6)
- [Cakewalk](https://www.bandlab.com/products/cakewalk)** (Range: B3-C#6)
- [Ableton](https://www.ableton.com/en/trial/)* (Range: B1-C#4)
- [Sekaiju](http://openmidiproject.osdn.jp/Sekaiju_en.html)
- [Trombone Charter](https://github.com/towai/TromboneCharter/releases/latest)

<sub>*유료 버전이 있으나 무료 체험판으로도 채보 작성에 사용 가능합니다.</sub><br> <sub>**노트를 기본적으로 Midi 트랙 2로 내보내므로 MIDI2TromboneChamp와 호환되지 않습니다.</sub><br> <sub>†FL Studio의 평가판에서는 Midi 파일로 내보낼 수 없으나 프로젝트 파일을 저장하고 <a href="https://github.com/Kaydax/flp2midi/releases/latest">flp2midi</a>를 사용하여 해결할 수 있습니다.</p>

<h4 spaces-before="0">
  Reaper 프로젝트
</h4>

<p spaces-before="0">
  어떤 에디터를 사용해야 할지 잘 모르겠다면 Reaper를 추천합니다. 채보 작성에 참고가 되는 프로젝트 파일도 배포하고 있습니다.
</p>

<ul>
  <li>
    Reaper의 기본적인 조작 설명 (영어)
  </li>
  <li>
    사전 구성된 설정
  </li>
  <li>
    예제 MIDI
  </li>
</ul>

<p spaces-before="0">
  프로젝트 파일은 <a href="https://trombone.wiki/docs/files/REAPER_Trombone_Champ_Charting_Template.zip">여기서 다운로드</a>할 수 있습니다.
</p>

<h3 spaces-before="0">
  일반 노트
</h3>

<p spaces-before="0">
  일반 노트는 Midi 에디터에서 생성하면 게임 내에서 동일하게 보입니다. 노트 사이에 시간 간격을 두도록 하세요!
</p>

<h3 spaces-before="0">
  슬라이드 노트
</h3>

<p spaces-before="0">
  슬라이드는 노트를 겹쳐서 만들 수 있습니다. 두 개의 노트가 겹쳐 있는 경우 첫 번째 노트의 시작에서 두 번째 노트의 시작까지 슬라이드합니다. 첫 번째 노트와 겹치는 부분은 사라집니다. 예시는 아래 사진을 참고하세요:
</p>

<p spaces-before="0">
  <img src="../docs/files/slide1.png" alt="슬라이드 노트 예시" />
</p>

<p spaces-before="0">
  만약 노트가 끝나도 다음 노트가 같은 타이밍에 시작되면 그 두 노트는 연결됩니다. 이렇게 하면 슬라이드의 곡선이 시작되는 위치를 조정할 수 있습니다. 다음은 여러 슬라이드를 함께 연결한 예시입니다:
</p>

<p spaces-before="0">
  (참고: 첫 번째 직선 구간은 곡선 구간과 별개의 노트입니다. 노트의 종료 시간은 다음 노트의 시작 시간과 같습니다.)
</p>

<p spaces-before="0">
  <img src="../docs/files/slide2.png" alt="여러 슬라이드 노트 예시" />
</p>

<h2 spaces-before="0">
  Midi에서 채보 파일로 변환
</h2>

<p spaces-before="0">
  ?> Midi2TromboneChamp 외에도 Midi 컨버터가 두 개 있습니다! <br>이러한 Midi 컨버터의 사용 방법은 비슷한 느낌이므로 이 가이드를 그대로 참고할 수 있습니다. <br>만약 최신 변환 프로그램을 사용하고 싶다면, 새로운 컨버터도 자유롭게 사용해보세요: <br><br><a href="https://nyxtheshield.github.io/Midi2TromboneChamp/">Midi2TromboneChamp (Unity Version)</a> - Unity 기반 브라우저 버전 Midi2TromboneChamp <br><a href="https://rshieldsprojects.github.io/projects/tccc/">Trombone Champ Chart Converter</a> - 새로운 기능이 추가된 브라우저 기반 컨버터
</p>

<ol start="1">
  <li>
    <p spaces-before="0">
      Go to <a href="https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest" x-nc="1">https://github.com/SockHungryClutz/Midi2TromboneChamp/releases/latest</a> and click <code>Midi2TromboneChamp.exe</code> to download it.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      실행하고 파일 선택 화면이 열리면 Midi 파일을 선택합니다. "열기"를 클릭합니다.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      설정 항목을 입력합니다:
    </p>
    <ul>
      <li>
        <code>Song Name</code>: 악곡의 풀네임으로 게임 내 선곡 화면에서 선택했을 때 악곡 정보에 표시됩니다.
      </li>
      <li>
        <code>Short Name</code>: 악곡 목록을 스크롤할 때 표시되는 이름입니다. 글자 수가 길면 텍스트 크기가 작아집니다. 글자 수 제한이 있는지는 명확하지 않습니다.
      </li>
      <li>
        <code>Folder Name</code>: 작성한 채보와 악곡을 저장하는 폴더의 이름입니다. 예시: Folder Name을 "my map"으로 설정하면 채보 데이터의 파일 경로는 BepInEx/CustomSongs/my map/song.tmb가 됩니다.
      </li>
      <li>
        <code>Year</code>: 곡이 제작된 년도를 입력합니다.
      </li>
      <li>
        <code>Author</code>: 곡의 작곡가를 입력합니다.
      </li>
      <li>
        <code>Difficulty</code>: 악곡 정보에 표시되는 채보의 난이도를 나타내는 별의 개수입니다.
      </li>
      <li>
        <code>Note Spacing</code>: BPM과 조합하여 연주 시 노트의 이동 속도에 영향을 줍니다.
      </li>
      <li>
        <code>Song Endpoint</code>: 악곡의 끝을 나타내는 박자입니다. 보통 이것은 자동으로 계산되지만 연주 종료 화면이 표시되었을 때 변경할 수 있습니다.
      </li>
      <li>
        <code>Beats per Bar</code>: 박자 선의 간격을 정합니다.
      </li>
    </ul>
  </li>
  
  <li>
    <p spaces-before="0">
      OK를 누릅니다. 파일 선택 화면에서 <code>Folder Name</code>에 입력한 동일한 이름의 폴더를 생성하고 그 안에 <code>song.tmb</code>라는 이름으로 저장합니다.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      음악 파일은 .ogg 파일을 사용합니다. 곡을 작성할 때, 음원 길이는 Song Endpoint보다 길어야 합니다. 그렇지 않은 경우, 악곡이 도중에 멈춰버려서 끝나지 않게 됩니다. Audacity 등의 소프트웨어를 사용하여 음원의 처음에 무음 부분을 삽입하여 Midi에 맞출 수 있습니다. 파일명은 <code>song.ogg</code>입니다.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      ogg 파일을 <code>song.tmb</code>와 동일한 폴더로 넣습니다.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      테스트 플레이를 할 때는 <a href="installing-songs">커스텀 곡 추가 방법</a>을 참조해 주세요.
    </p>
  </li>
  
  <li>
    <p spaces-before="0">
      <a href="chart-backgrounds">배경 추가하기!</a>
    </p>
  </li>
</ol>
