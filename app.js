/* app.js – Unified Workflow & Strategic Initiatives dashboard (no external storage) */
(() => {
  // ----------------------------- Data ------------------------------------ //
  const WBS_STRUCTURE = {"1.0 Unified Workflow and Strategic Initiatives": {"1.1 Business Initiatives": {"1.1.1 Gem Droppers Content Creation and Sharing Initiative (GDCCSI)": null,"1.1.2 Sales - $5,000 Digital Products by July 1, 2025": null,"1.1.3 Get in the Cannon Project": null,"1.1.4 Networking Client Acquisition": null,"1.1.5 Freelance Prospecting": null},"1.2 Personal Development & Well-being": {"1.2.1 Memoir Writing": null,"1.2.2 Creative Resurgence Epic": null,"1.2.3 Professional Certifications Renewal": null,"1.2.4 Health & Diet Management": null,"1.2.5 Leisure & Entertainment": null,"1.2.6 K2L Project": null},"1.3 System Development & Maintenance": {"1.3.1 Airtable Multi-Layered Productivity System Setup": null,"1.3.2 Custom Productivity Apps Development": null,"1.3.3 Suno Export & Music Management (Suno-EXP-2025)": null,"1.3.4 Automation Bot Development": null,"1.3.5 Knowledge Management Tool Optimization": null},"1.4 Financial Management": {"1.4.1 Bankruptcy Process (CH7-BK-2025)": null,"1.4.2 Budget & Financial Control": null}}};

  const WBS_DICTIONARY = {"1.1.1": {"Element": "Gem Droppers Content Creation and Sharing Initiative (GDCCSI)","Description": "High-value project focused on content creation and sharing, involving ebook development, holiday posts, and exploring Substack as an outlet.","Deliverables": "- First Ebook (CFE-2025 Project)\n- Finalized ebook task lists\n- Holiday posts collection\n- Launched website webstore","Phases": "Network, Conduct","Timeline": "Ebook task lists finalized by June 31, 2025","Tags/Notes": "ProductionArea, High-Value, Active"},"1.1.2": {"Element": "Sales - $5,000 Digital Products by July 1, 2025","Description": "Direct sales objective to achieve specific revenue target from digital products.","Deliverables": "$5,000 worth of digital products sold with measurable sales tracking.","Phases": "Conduct, Control, Market","Timeline": "Goal date: July 1, 2025 (8-hour estimated duration)","Tags/Notes": "BusinessP, Maintain, Sale, Prjttask, Blocked"},"1.1.3": {"Element": "Get in the Cannon Project","Description": "Ongoing daily recurring business-oriented project implying consistent market-related activities.","Deliverables": "Consistent market outreach and business growth outcomes.","Phases": "Market, Conduct","Timeline": "Starts July 24, 2025; repeats every two days, skipping weekends (8 hours)","Tags/Notes": "BusinessP, MVP, Started, Execute, Must"},"1.1.4": {"Element": "Networking Client Acquisition","Description": "Ongoing activities focused on building connections and acquiring clients.","Deliverables": "Client leads, professional connections, expanded network.","Phases": "Conduct, Network","Timeline": "Starts July 24, 2025; repeats every two days (8 hours). Associated with Q1, Q2 planning.","Tags/Notes": "BusinessArea, CareerArea, Must"},"1.1.5": {"Element": "Freelance Prospecting","Description": "Activities aimed at finding and applying for freelance jobs/gigs.","Deliverables": "- Prospect Apply to 5 Jobs\n- Prospect Apply for 5 Gigs\n- Review Prospects\n- Job tracker links","Phases": "Prospect, Scope, Research, Network","Timeline": "Starts July 24, 2025; repeats every two days, skipping weekends (8 hours)","Tags/Notes": "K2L, MVP, Objective, Must"},"1.2.1": {"Element": "Memoir Writing","Description": "Ongoing project focused on writing memoir, including reminiscing memories and setting up voice input app.","Deliverables": "- Memoir content from reminiscing memories\n- Setup of memoir app for voice input\n- Branch Off Moments system","Phases": "Document, Develop, Review","Timeline": "Starts July 24, 2025; repeats every three days (8 hours). Sub-task started June 27, 2025","Tags/Notes": "Life, PersonalArea, PersonalF, Write, Operation"},"1.2.2": {"Element": "Creative Resurgence Epic","Description": "Ongoing project focused on creative output and artistic development.","Deliverables": "Creative works and progress in creative endeavors.","Phases": "Conduct, LeisureEntertainment","Timeline": "Starts July 24, 2025; repeats weekly on Saturdays and Sundays (8 hours each)","Tags/Notes": "ProductionArea, Recreation, Project, Active, Execute"},"1.2.3": {"Element": "Professional Certifications Renewal","Description": "Proactive management of professional certifications including learning and execution for renewal.","Deliverables": "- Completed CompTIA A+ certification\n- Completed CompTIA Security+ certification","Phases": "Conduct, Educate, Research","Timeline": "Both certifications due February 1, 2026","Tags/Notes": "Blocked, Learn, EducationArea, Must, One Year to Go!"},"1.2.4": {"Element": "Health & Diet Management","Description": "Activities focused on maintaining and improving personal health and dietary habits.","Deliverables": "- Meal prep (veggies)\n- Adherence to specific diets (juice, vegetarian)\n- Improved health monitoring","Phases": "Setup, Research, Resource, Control, Review, Ideate","Timeline": "Meal Prep repeats weekly on Sundays. Juice Diet due August 2, 2025","Tags/Notes": "HealthF, Health, Personal, PersonalF, Must, Should"},"1.3.1": {"Element": "Airtable Multi-Layered Productivity System Setup","Description": "Major project to transform Airtable base into dynamic, automated productivity engine with five internal phases.","Deliverables": "- Functional, automated Airtable system\n- Four-table structure (Tasks, Days, Weeks, Months)\n- Key fields and date formulas\n- Automated record generation\n- Progress dashboard with rollup fields","Phases": "Setup. Internal phases: Foundation, Weaving, Autopilot, Dashboard, Advanced","Timeline": "Task entry date: July 24, 2025","Tags/Notes": "Active, Airtable"},"1.3.2": {"Element": "Custom Productivity Apps Development","Description": "Initiative to build custom productivity applications, including customized Routinery App.","Deliverables": "- New applications or customized Routinery App\n- Interactive mindmaps\n- Flow charts for decisions\n- APK applications","Phases": "Develop, Setup","Timeline": "25-minute estimate for development tasks","Tags/Notes": "Produce, Build, AppDev, Task"},"1.3.3": {"Element": "Suno Export & Music Management (Suno-EXP-2025)","Description": "Comprehensive management of music creations from Suno platform, including organizing, processing, producing, editing, and sharing.","Deliverables": "- Organized, edited Suno music creations\n- Suno data scraping tool\n- Weekly new Suno tracks\n- Imported/edited tracks in Ableton","Phases": "Conduct","Timeline": "Starts July 24, 2025; repeats weekly on weekends (8 hours). Deadlines: March 25, 2025 for organization/tool development.","Tags/Notes": "ProductionArea, Suno, Must"},"1.3.4": {"Element": "Automation Bot Development","Description": "Design, development, and integration of various bots and automation tools to streamline processes.","Deliverables": "- Task Merging Bot\n- Batch Researching Bot\n- Hashtag Bot for bulk task additions\n- API and automation integrations","Phases": "Setup, Develop, Control, Research, Optimize","Timeline": "Various bots listed as backlog tasks. Task Merging Bot is active.","Tags/Notes": "ToolsF, AdminF, AI, Automation"},"1.3.5": {"Element": "Knowledge Management Tool Optimization","Description": "Ongoing setup, maintenance, and optimization of digital tools, databases, and knowledge management systems.","Deliverables": "- Organized Obsidian vaults\n- Updated guides\n- Streamlined Notion projects\n- Optimized system performance\n- Updated macros","Phases": "Setup, Optimize, Control, Review","Timeline": "Manage Tools repeats weekly on Thursdays. Fix Macros due July 24, 2025.","Tags/Notes": "AdminF, ToolsF, Maintain, Should"},"1.4.1": {"Element": "Bankruptcy Process (CH7-BK-2025)","Description": "Significant personal and financial process, specifically executing Chapter 7 Bankruptcy.","Deliverables": "Completion of Chapter 7 Bankruptcy process and financial reorganization.","Phases": "Setup, Conduct, Control, Finance","Timeline": "Task entry date: July 24, 2025 (estimated 600 minutes)","Tags/Notes": "H-Impact-H-Effort, Must, Blocked, PersonalArea"},"1.4.2": {"Element": "Budget & Financial Control","Description": "Managing financial aspects and budgeting, including setting and controlling budgets.","Deliverables": "- Set budgets\n- Updated financial records\n- Controlled finances\n- Monthly Distrokid updates","Phases": "Control, Finance, Review, Market","Timeline": "Set Budget repeats weekly, skipping weekends. Monthly Distrokid updates.","Tags/Notes": "Maintain, Must, PersonalF"}};

  // ----------------------------- State ------------------------------------ //
  const state = {
    currentView: 'home',
    tasks: [],
    files: [],
    reports: [],
    pages: {},
  };

  // ---------------------- Utility / Helper Functions ---------------------- //
  function $(id) {
    return document.getElementById(id);
  }

  // Simple markdown parser (very minimal)
  function parseMarkdown(md) {
    const lines = md.split(/\n/);
    return lines
      .map((l) => {
        if (l.startsWith('### ')) return `<h3>${l.slice(4)}</h3>`;
        if (l.startsWith('## ')) return `<h2>${l.slice(3)}</h2>`;
        if (l.startsWith('# ')) return `<h1>${l.slice(2)}</h1>`;
        if (l.startsWith('- ')) return `<li>${l.slice(2)}</li>`;
        return `<p>${l}</p>`;
      })
      .join('')
      .replace(/<li>([\s\S]*?)<\/li>/g, (m) => `<ul>${m}</ul>`);
  }

  function getUniqueTags() {
    const set = new Set();
    Object.values(WBS_DICTIONARY).forEach((d) => {
      d['Tags/Notes']?.split(',').forEach((t) => set.add(t.trim()));
    });
    return Array.from(set).filter(Boolean).sort();
  }

  function generateInitialTasks() {
    let idCounter = 1;
    Object.entries(WBS_DICTIONARY).forEach(([wbsId, data]) => {
      const deliverables = data.Deliverables.split(/\n/).map((l) => l.replace(/^[-•]\s*/, '').trim()).filter(Boolean);
      deliverables.forEach((task) => {
        state.tasks.push({
          id: idCounter++,
          task,
          wbs: wbsId,
          status: 'To Do',
          priority: '',
          due: '',
          assigned: '',
        });
      });
    });
  }

  // ------------------------- View Management ----------------------------- //
  function showView(view) {
    state.currentView = view;
    document.querySelectorAll('.view-section').forEach((sec) => {
      sec.classList.add('hidden');
      sec.classList.remove('active');
    });
    const targetView = document.getElementById(`view-${view}`);
    if (targetView) {
      targetView.classList.remove('hidden');
      targetView.classList.add('active');
    }
  }

  // ------------------------- Home / Wiki ---------------------------------- //
  function renderHome() {
    const md = `# Unified Workflow & Strategic Initiatives\n\nThe Work Breakdown Structure (WBS) organizes all program work into manageable sections. Browse the dashboard to explore details, tasks, assets, reports and knowledge.\n\n**Sponsor:** Kareem Bullard`;
    $('homeBody').innerHTML = parseMarkdown(md);
  }

  // ---------------------- WBS Dashboard ----------------------------------- //
  function buildTree(container, structure) {
    container.innerHTML = '';

    function recurse(nodeObj, parentUl) {
      Object.entries(nodeObj).forEach(([key, val]) => {
        const li = document.createElement('li');
        const idMatch = key.match(/^[0-9.]+/);
        const wbsId = idMatch ? idMatch[0] : '';
        const name = key.replace(/^[0-9.]+\s*/, '');

        if (val) {
          // branch
          const toggle = document.createElement('span');
          toggle.className = 'wbs-toggle';
          toggle.textContent = `${wbsId} ${name}`;
          toggle.setAttribute('aria-expanded', 'false');
          const childUl = document.createElement('ul');
          childUl.classList.add('hidden');
          toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            childUl.classList.toggle('hidden', expanded);
          });
          li.appendChild(toggle);
          li.appendChild(childUl);
          recurse(val, childUl);
        } else {
          // leaf
          const leaf = document.createElement('span');
          leaf.className = 'wbs-leaf';
          leaf.dataset.wbs = wbsId;
          leaf.textContent = `${wbsId} ${name}`;
          leaf.addEventListener('click', () => showWbsDetail(wbsId));
          li.appendChild(leaf);
        }
        parentUl.appendChild(li);
      });
    }

    recurse(structure, container);
  }

  function showWbsDetail(wbsId) {
    const data = WBS_DICTIONARY[wbsId];
    if (!data) {
      $('wbsDetail').innerHTML = `<p>No dictionary entry found for ${wbsId}</p>`;
      return;
    }
    const html = `
      <h3>${wbsId} – ${data.Element}</h3>
      <p><strong>Description:</strong> ${data.Description}</p>
      <p><strong>Deliverables:</strong><br>${data.Deliverables.replace(/\n/g, '<br>')}</p>
      <p><strong>Phases:</strong> ${data.Phases}</p>
      <p><strong>Timeline:</strong> ${data.Timeline}</p>
      <p><strong>Tags/Notes:</strong> ${data['Tags/Notes']}</p>
    `;
    $('wbsDetail').innerHTML = html;
  }

  // ------------------------ Dictionary ------------------------------------ //
  function populateTagFilter() {
    const sel = $('tagFilter');
    sel.innerHTML = '';
    getUniqueTags().forEach((tag) => {
      const opt = document.createElement('option');
      opt.value = tag;
      opt.textContent = tag;
      sel.appendChild(opt);
    });
  }

  function renderDictionary() {
    const searchVal = $('dictSearch').value.toLowerCase();
    const selectedTags = Array.from($('tagFilter').selectedOptions).map((o) => o.value);

    const rows = Object.entries(WBS_DICTIONARY).filter(([_, d]) => {
      const haystack = `${d.Element} ${d.Description}`.toLowerCase();
      const matchesSearch = haystack.includes(searchVal);
      const tags = d['Tags/Notes']?.split(',').map((t) => t.trim());
      const matchesTags = selectedTags.length === 0 || selectedTags.every((t) => tags?.includes(t));
      return matchesSearch && matchesTags;
    });

    const table = $('dictTable');
    table.innerHTML = '';
    const header = document.createElement('tr');
    ['WBS ID', 'Element', 'Description', 'Timeline', 'Tags/Notes'].forEach((h) => {
      const th = document.createElement('th');
      th.textContent = h;
      header.appendChild(th);
    });
    table.appendChild(header);

    rows.forEach(([wbsId, d]) => {
      const tr = document.createElement('tr');
      const cells = [wbsId, d.Element, d.Description, d.Timeline, d['Tags/Notes']];
      cells.forEach((c) => {
        const td = document.createElement('td');
        td.textContent = c;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  }

  // ---------------------------- Tasks ------------------------------------- //
  function renderTaskTable() {
    const table = $('taskTable');
    table.innerHTML = '';
    const header = document.createElement('tr');
    ['Task', 'WBS ID', 'Status', 'Priority', 'Due Date', 'Assigned To', ''].forEach((h) => {
      const th = document.createElement('th');
      th.textContent = h;
      header.appendChild(th);
    });
    table.appendChild(header);

    state.tasks.forEach((t, idx) => {
      const tr = document.createElement('tr');
      tr.dataset.index = idx;

      // Task
      const tdTask = document.createElement('td');
      const inpTask = document.createElement('input');
      inpTask.type = 'text';
      inpTask.value = t.task;
      inpTask.className = 'form-control';
      inpTask.addEventListener('input', () => (t.task = inpTask.value));
      tdTask.appendChild(inpTask);
      tr.appendChild(tdTask);

      // WBS (readonly)
      const tdWbs = document.createElement('td');
      tdWbs.textContent = t.wbs;
      tr.appendChild(tdWbs);

      // Status
      const tdStatus = document.createElement('td');
      const selStatus = document.createElement('select');
      selStatus.className = 'form-control';
      ['To Do', 'In Progress', 'Done'].forEach((s) => {
        const o = document.createElement('option');
        o.value = s;
        o.textContent = s;
        if (t.status === s) o.selected = true;
        selStatus.appendChild(o);
      });
      selStatus.addEventListener('change', () => (t.status = selStatus.value));
      tdStatus.appendChild(selStatus);
      tr.appendChild(tdStatus);

      // Priority
      const tdPri = document.createElement('td');
      const inPri = document.createElement('input');
      inPri.type = 'text';
      inPri.className = 'form-control';
      inPri.value = t.priority;
      inPri.addEventListener('input', () => (t.priority = inPri.value));
      tdPri.appendChild(inPri);
      tr.appendChild(tdPri);

      // Due date
      const tdDue = document.createElement('td');
      const inDue = document.createElement('input');
      inDue.type = 'date';
      inDue.className = 'form-control';
      inDue.value = t.due;
      inDue.addEventListener('input', () => (t.due = inDue.value));
      tdDue.appendChild(inDue);
      tr.appendChild(tdDue);

      // Assigned
      const tdAssign = document.createElement('td');
      const inAssign = document.createElement('input');
      inAssign.type = 'text';
      inAssign.className = 'form-control';
      inAssign.value = t.assigned;
      inAssign.addEventListener('input', () => (t.assigned = inAssign.value));
      tdAssign.appendChild(inAssign);
      tr.appendChild(tdAssign);

      // Delete btn
      const tdDel = document.createElement('td');
      const delBtn = document.createElement('button');
      delBtn.textContent = '🗑️';
      delBtn.className = 'btn btn--secondary btn--sm';
      delBtn.addEventListener('click', () => {
        state.tasks.splice(idx, 1);
        renderTaskTable();
      });
      tdDel.appendChild(delBtn);
      tr.appendChild(tdDel);

      table.appendChild(tr);
    });
  }

  // ------------------------- Assets --------------------------------------- //
  function renderFileTable() {
    const table = $('fileTable');
    table.innerHTML = '';
    const header = document.createElement('tr');
    ['Name', 'Size (KB)', 'Type', 'Download'].forEach((h) => {
      const th = document.createElement('th');
      th.textContent = h;
      header.appendChild(th);
    });
    table.appendChild(header);

    state.files.forEach((f) => {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      nameTd.textContent = f.file.name;
      const sizeTd = document.createElement('td');
      sizeTd.textContent = (f.file.size / 1024).toFixed(1);
      const typeTd = document.createElement('td');
      typeTd.textContent = f.file.type || '—';
      const downTd = document.createElement('td');
      const a = document.createElement('a');
      a.href = f.url;
      a.download = f.file.name;
      a.textContent = 'Download';
      a.className = 'file-link';
      downTd.appendChild(a);
      [nameTd, sizeTd, typeTd, downTd].forEach((td) => tr.appendChild(td));
      table.appendChild(tr);
    });
  }

  // ------------------------ Reporting ------------------------------------- //
  function populateReportWbs() {
    const sel = $('reportWBS');
    sel.innerHTML = '';
    Object.keys(WBS_DICTIONARY).forEach((id) => {
      const opt = document.createElement('option');
      opt.value = id;
      opt.textContent = `${id} – ${WBS_DICTIONARY[id].Element}`;
      sel.appendChild(opt);
    });
  }

  function renderReportTable() {
    const table = $('reportTable');
    table.innerHTML = '';
    const header = document.createElement('tr');
    ['Date', 'WBS ID', 'Status Update', 'Risks', 'Next Actions'].forEach((h) => {
      const th = document.createElement('th');
      th.textContent = h;
      header.appendChild(th);
    });
    table.appendChild(header);

    state.reports.forEach((r) => {
      const tr = document.createElement('tr');
      [r.date, r.wbs, r.status, r.risks, r.actions].forEach((val) => {
        const td = document.createElement('td');
        td.textContent = val;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  }

  // ----------------------- Knowledge Library ------------------------------ //
  function refreshPageSelect() {
    const sel = $('pageSelect');
    sel.innerHTML = '';
    const optNew = document.createElement('option');
    optNew.value = '__new__';
    optNew.textContent = '— New Page —';
    sel.appendChild(optNew);
    Object.keys(state.pages).forEach((title) => {
      const opt = document.createElement('option');
      opt.value = title;
      opt.textContent = title;
      sel.appendChild(opt);
    });
    sel.value = '__new__';
    $('wikiEditor').value = '';
    $('wikiDisplay').innerHTML = '';
  }

  function saveWikiPage() {
    const sel = $('pageSelect');
    let title = sel.value;
    if (title === '__new__') {
      title = prompt('Enter page title');
      if (!title) return;
    }
    state.pages[title] = $('wikiEditor').value;
    refreshPageSelect();
    $('pageSelect').value = title;
    renderWikiDisplay();
  }

  function renderWikiDisplay() {
    const title = $('pageSelect').value;
    const md = state.pages[title] || '';
    $('wikiDisplay').innerHTML = parseMarkdown(md);
  }

  // -------------------------- Dark Mode ----------------------------------- //
  function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-color-scheme') === 'dark';
    html.setAttribute('data-color-scheme', isDark ? 'light' : 'dark');
    $('dark-toggle').textContent = isDark ? '🌙' : '☀️';
  }

  // ---------------------------- Init -------------------------------------- //
  function bindEvents() {
    // sidebar radio navigation
    document.querySelectorAll('#navForm input[name="view"]').forEach((radio) => {
      radio.addEventListener('change', () => showView(radio.value));
    });

    // dictionary search/filter
    $('dictSearch').addEventListener('input', renderDictionary);
    $('tagFilter').addEventListener('change', renderDictionary);

    // add task
    $('addTaskBtn').addEventListener('click', () => {
      state.tasks.push({
        id: Date.now(),
        task: '',
        wbs: '',
        status: 'To Do',
        priority: '',
        due: '',
        assigned: '',
      });
      renderTaskTable();
    });

    // file upload
    $('fileUpload').addEventListener('change', (e) => {
      Array.from(e.target.files).forEach((file) => {
        const url = URL.createObjectURL(file);
        state.files.push({ file, url });
      });
      renderFileTable();
      e.target.value = '';
    });

    // report form
    $('reportForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const r = {
        date: new Date().toLocaleDateString(),
        wbs: $('reportWBS').value,
        status: $('reportStatus').value,
        risks: $('reportRisks').value,
        actions: $('reportActions').value,
      };
      state.reports.push(r);
      renderReportTable();
      e.target.reset();
    });

    // knowledge library
    $('pageSelect').addEventListener('change', () => {
      const title = $('pageSelect').value;
      $('wikiEditor').value = title && title !== '__new__' ? state.pages[title] || '' : '';
      renderWikiDisplay();
    });

    $('wikiEditor').addEventListener('input', renderWikiDisplay);

    $('saveWiki').addEventListener('click', saveWikiPage);

    // dark mode toggle
    $('dark-toggle').addEventListener('click', toggleDarkMode);
  }

  function initialRender() {
    renderHome();
    buildTree($('wbsTree'), WBS_STRUCTURE);
    populateTagFilter();
    renderDictionary();
    generateInitialTasks();
    renderTaskTable();
    renderFileTable();
    populateReportWbs();
    renderReportTable();
    refreshPageSelect();
  }

  function init() {
    bindEvents();
    initialRender();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();