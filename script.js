const asset = filename => `assets/${filename}`;

const projects = {
  genai: {
    title: 'Generative video tests',
    client: '',
    year: '2026',
    hero: asset('genai-film.jpeg'),
    summary: 'Image-to-video tests focused on reference consistency, motion control and compositing.',
    tags: ['Generative AI', 'Motion guidance', 'Editing'],
    gallery: [],
    videos: [
      {
        type: 'drive',
        id: '17vvzLC7uURlqrXFdWfhuo5s7pVyCDkTS',
        label: 'Video reel'
      }
    ],
    links: []
  },

  motion: {
    title: '3D motion graphics',
    client: '',
    year: '2017–2022',
    hero: asset('motion-graphics.jpeg'),
    summary: 'Modeling, materials, lighting and animation studies.',
    tags: ['3D', 'Animation', 'Rendering'],
    gallery: [],
    videos: [
      {
        type: 'youtube',
        id: 'pMIFjTBngeo',
        label: 'Motion reel'
      }
    ],
    links: []
  },

  architecture: {
    title: 'Urban planning visualization',
    client: 'WSP Finland Oy',
    year: '2016–2026',
    hero: asset('architecture-film.jpeg'),
    summary: 'Animated presentations, tram design and city-planning visuals.',
    tags: ['Urban planning', '3D', 'Animation'],
    gallery: [
      {
        src: asset('tram-visualization.jpeg'),
        caption: 'Tram visualization'
      },
      {
        src: asset('urban-vision.jpeg'),
        caption: 'Urban planning visualization'
      },
      {
        src: asset('urban-plan.jpeg'),
        caption: 'Stylized urban plan',
        wide: true
      }
    ],
    videos: [
      {
        type: 'youtube',
        id: 'IXYcCTH5P3Y',
        label: 'Visualization film'
      }
    ],
    links: []
  },

  food: {
    title: 'Seasonal image variations',
    client: '',
    year: '2026',
    hero: asset('seasonal-food.jpeg'),
    summary: 'One food photograph adapted to different seasons while preserving its subject and composition.',
    tags: ['ComfyUI', 'FLUX.2 Klein', 'Image generation'],
    gallery: [
      {
        src: asset('seasonal-workflow.jpeg'),
        caption: 'ComfyUI workflow',
        wide: true
      }
    ],
    links: []
  },

  audiovisual: {
    title: 'Audio-reactive 3D visuals',
    client: '',
    year: '2020–2023',
    hero: asset('reactive-audiovisual.jpeg'),
    summary: 'Audio-generated keyframes control 3D motion and lighting. Other studies combine music with abstract visuals.',
    tags: ['Blender', 'Audio-reactive 3D', 'Electronic music'],
    gallery: [
      {
        src: asset('audiovisual-green.jpeg'),
        caption: 'Audiovisual experiment'
      },
      {
        src: asset('audiovisual-orange.jpeg'),
        caption: 'Audiovisual experiment'
      },
      {
        src: asset('audiovisual-purple.jpeg'),
        caption: 'Abstract 3D scene'
      },
      {
        src: asset('audiovisual-green-organic.jpeg'),
        caption: 'Organic visual study'
      }
    ],
    videos: [
      {
        type: 'youtube',
        id: 'JfAaK2cVu9I',
        label: '2020 project'
      }
    ],
    links: []
  },

  interiors: {
    title: 'Interior visualization',
    client: '',
    year: '2023',
    hero: asset('interior-dining.jpeg'),
    summary: 'Room studies developed from 2D references into 3D scenes.',
    tags: ['3D', 'Interiors', 'Lighting'],
    gallery: [
      {
        src: asset('interior-pink.jpeg'),
        caption: 'Living room'
      },
      {
        src: asset('interior-bedroom.jpeg'),
        caption: 'Bedroom'
      },
      {
        src: asset('interior-fireplace.jpeg'),
        caption: 'Living room'
      },
      {
        src: asset('interior-nook.jpeg'),
        caption: 'Reading corner'
      }
    ],
    links: []
  },

  ui: {
    title: 'UI/UX prototypes',
    client: '',
    year: '2024–2025',
    hero: asset('ui-equalizer.jpeg'),
    summary: 'Audio-software interface concepts, including an equalizer and synthesizer UI.',
    tags: [
      'UI/UX',
      'Prototyping',
      'AI-assisted development'
    ],

    gallery: [],

    videos: [
      {
        type: 'drive',
        id: '1NMUE7aq00127QEorGKaRQxX54RiOlvSu',
        label: 'Equalizer demo'
      },
      {
        type: 'youtube',
        id: 'S_rx7cfuejY',
        label: 'Synthesizer demo'
      }
    ],

    embeddedVideos: [1],

    links: []
  },

  automation: {
    title: 'Media automation workflows',
    client: '',
    year: '2026',

    hero: asset('seasonal-workflow.jpeg'),

    summary: 'A node-based ComfyUI workflow for generating seasonal variations from a single food photograph. Using FLUX.2 Klein and image references, the process adapts lighting, colors, backgrounds and atmosphere to different seasons while preserving the original food subject and composition. The workflow demonstrates how generative AI can support consistent visual production, turning one source image into a coordinated series of campaign-ready variations.',

    tags: [
      'ComfyUI',
      'FLUX.2 Klein',
      'Image-to-image',
      'Creative automation'
    ],

    gallery: [
      {
        src: asset('seasonal-food.jpeg'),
        caption: 'Generated seasonal variations from the same original food photograph',
        wide: true
      }
    ],

    links: []
  },

  brand: {
    title: 'Palette-guided image generation',
    client: '',
    year: '2026',

    // Original logo and color palette as the first image.
    hero: asset('Logo_with%20colorpalette.jpeg'),

    summary: 'A ComfyUI-based generative image workflow designed to create visually consistent image series from a reference color palette. The process extracts dominant and supporting colors from an original logo and its color palette, using those colors to guide the generation of new images. Rather than reproducing the original logo or composition, the workflow allows subjects, shapes, materials, textures and visual styles to vary while maintaining a recognizable color identity. The resulting images demonstrate how a shared palette can connect otherwise different visual concepts, with potential applications in brand imagery, art direction and campaign production.',

    tags: [
      'ComfyUI',
      'Color extraction',
      'Generative AI',
      'Visual consistency',
      'Creative automation'
    ],

    // Three generated examples without a duplicate logo.
    gallery: [
      {
        src: asset('palette-example-01.png'),
        caption: 'Palette-guided generation — example 01',
        wide: true
      },
      {
        src: asset('palette-example-02.png'),
        caption: 'Palette-guided generation — example 02'
      },
      {
        src: asset('palette-example-03.png'),
        caption: 'Palette-guided generation — example 03'
      }
    ],

    links: []
  }
};


// --------------------------------------------------
// GLOBAL ELEMENTS
// --------------------------------------------------

const order = Object.keys(projects);

const overlay = document.getElementById('project-overlay');
const dialog = overlay.querySelector('.project-dialog');
const scrollArea = document.getElementById('dialog-scroll');
const hero = document.getElementById('dialog-hero');

let activeProject = null;
let lastFocused = null;


// --------------------------------------------------
// VIDEO HELPERS
// --------------------------------------------------

function getVideoUrl(video, autoplay = false) {
  const id = encodeURIComponent(video.id);

  if (video.type === 'drive') {
    return `https://drive.google.com/file/d/${id}/preview`;
  }

  return (
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?rel=0${autoplay ? '&autoplay=1' : ''}`
  );
}


function createVideoIframe(video, title, autoplay = false) {
  const iframe = document.createElement('iframe');

  iframe.src = getVideoUrl(video, autoplay);
  iframe.title = `${title} — ${video.label}`;

  iframe.allow =
    'accelerometer; autoplay; clipboard-write; encrypted-media; ' +
    'gyroscope; picture-in-picture; web-share';

  iframe.allowFullscreen = true;
  iframe.loading = autoplay ? 'eager' : 'lazy';

  iframe.style.display = 'block';
  iframe.style.width = '100%';
  iframe.style.aspectRatio = '16 / 9';
  iframe.style.height = 'auto';
  iframe.style.border = '0';
  iframe.style.background = '#000';

  return iframe;
}


function playVideo(project, index) {
  const video = project.videos?.[index];

  if (!video) return;

  const iframe = createVideoIframe(
    video,
    project.title,
    true
  );

  hero.replaceChildren(iframe);

  document.querySelectorAll('.dialog-video-button').forEach(button => {
    button.setAttribute(
      'aria-pressed',
      String(Number(button.dataset.videoIndex) === index)
    );
  });
}


// --------------------------------------------------
// PROJECT RENDERING
// --------------------------------------------------

function renderProject(id) {
  const project = projects[id];

  if (!project) return;

  activeProject = id;


  // TITLE AND METADATA

  document.getElementById('dialog-title').textContent =
    project.title;

  const client = document.getElementById('dialog-client');

  client.textContent = project.client;
  client.hidden = !project.client;

  document.getElementById('dialog-year').textContent =
    project.year;

  document.getElementById('dialog-summary').textContent =
    project.summary;


  // MAIN HERO IMAGE

  const heroImage = document.createElement('img');

  heroImage.src = project.hero;
  heroImage.alt = project.title;

  hero.replaceChildren(heroImage);


  // MAIN VIDEO PLAY BUTTON

  if (project.videos?.length) {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'dialog-play';

    button.textContent = id === 'ui'
      ? 'Play equalizer demo'
      : 'Play video';

    button.addEventListener('click', () => {
      playVideo(project, 0);
    });

    hero.append(button);
  }


  // PROJECT TAGS

  const tags = document.getElementById('dialog-tags');

  tags.className = 'dialog-tags';

  tags.replaceChildren(
    ...project.tags.map(label => {
      const el = document.createElement('span');

      el.className = 'dialog-tag';
      el.textContent = label;

      return el;
    })
  );


  // VIDEO BUTTONS AND EXTERNAL LINKS

  const links = document.getElementById('dialog-links');

  links.replaceChildren();

  const switchableVideos = (project.videos || [])
    .map((video, index) => ({ video, index }))
    .filter(({ index }) =>
      !(project.embeddedVideos || []).includes(index)
    );

  if (switchableVideos.length > 1) {
    const label = document.createElement('div');

    label.className = 'dialog-side-label';
    label.textContent = 'Videos';

    links.append(label);

    switchableVideos.forEach(({ video, index }) => {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'dialog-video-button';
      button.dataset.videoIndex = String(index);

      button.setAttribute('aria-pressed', 'false');
      button.textContent = `Play ${video.label}`;

      button.addEventListener('click', () => {
        playVideo(project, index);
      });

      links.append(button);
    });
  }

  links.append(
    ...(project.links || []).map(item => {
      const el = document.createElement('a');

      el.className = 'dialog-link';
      el.href = item.url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      el.textContent = item.label;

      return el;
    })
  );


  // --------------------------------------------------
  // IMAGE GALLERY
  // --------------------------------------------------

  const gallery = document.getElementById('dialog-gallery');
  const galleryItems = [];

  (project.gallery || []).forEach(item => {
    const figure = document.createElement('figure');

    if (item.wide) {
      figure.className = 'wide';
    }

    const image = document.createElement('img');

    image.loading = 'lazy';
    image.src = item.src;
    image.alt = item.caption;

    // Hide missing images without showing broken icons.
    image.addEventListener('error', () => {
      figure.remove();

      if (!gallery.children.length) {
        gallery.hidden = true;
      }
    });

    const caption = document.createElement('figcaption');

    caption.textContent = item.caption;

    figure.append(image, caption);
    galleryItems.push(figure);
  });


  // --------------------------------------------------
  // ADDITIONAL EMBEDDED VIDEOS
  // --------------------------------------------------

  // UI/UX synthesizer demo appears below the first video.
  // Both videos can be played independently.

  (project.embeddedVideos || []).forEach(index => {
    const video = project.videos?.[index];

    if (!video) return;

    const figure = document.createElement('figure');

    figure.className = 'wide';

    const iframe = createVideoIframe(
      video,
      project.title
    );

    const caption = document.createElement('figcaption');

    caption.textContent = video.label;

    figure.append(iframe, caption);
    galleryItems.push(figure);
  });

  gallery.replaceChildren(...galleryItems);

  gallery.hidden = galleryItems.length === 0;

  scrollArea.scrollTop = 0;
}


// --------------------------------------------------
// OPEN PROJECT
// --------------------------------------------------

function openProject(id) {
  if (!projects[id]) return;

  lastFocused = document.activeElement;

  renderProject(id);

  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');

  document.body.classList.add('modal-open');

  document.getElementById('dialog-close').focus();
}


// --------------------------------------------------
// CLOSE PROJECT
// --------------------------------------------------

function closeProject() {
  if (!overlay.classList.contains('is-open')) return;

  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');

  document.body.classList.remove('modal-open');

  // Remove video players to stop playback.

  hero.replaceChildren();

  document.getElementById('dialog-gallery')
    .replaceChildren();

  activeProject = null;

  if (lastFocused?.isConnected) {
    lastFocused.focus();
  }
}


// --------------------------------------------------
// PROJECT CARD EVENTS
// --------------------------------------------------

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    openProject(card.dataset.project);
  });
});


// --------------------------------------------------
// CLOSE BUTTONS
// --------------------------------------------------

document.getElementById('dialog-close')
  .addEventListener('click', closeProject);

document.querySelector('[data-close-overlay]')
  .addEventListener('click', closeProject);


// --------------------------------------------------
// NEXT PROJECT
// --------------------------------------------------

document.getElementById('next-project')
  .addEventListener('click', () => {
    const index = order.indexOf(activeProject);

    renderProject(
      order[(index + 1) % order.length]
    );
  });


// --------------------------------------------------
// KEYBOARD ACCESSIBILITY
// --------------------------------------------------

document.addEventListener('keydown', event => {
  if (!overlay.classList.contains('is-open')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeProject();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusable = [
    ...dialog.querySelectorAll(
      'button:not([disabled]), a[href], iframe'
    )
  ].filter(el => el.getClientRects().length);

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (
    event.shiftKey &&
    document.activeElement === first
  ) {
    event.preventDefault();
    last.focus();
  } else if (
    !event.shiftKey &&
    document.activeElement === last
  ) {
    event.preventDefault();
    first.focus();
  }
});
