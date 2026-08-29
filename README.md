# kalechap-userguide

## Setup

In order to use MkDocs with this documentation, it is advised to create a new conda environment specifically for it.

### 1. Create a conda environment

Run the following command to create a new environment (e.g., named `mkdocs`):

```bash
conda create -n mkdocs python=3.10
```

### 2. Activate the environment

Activate the environment whenever you need to work on the userguide:

```bash
conda activate mkdocs
```

### 3. Install MkDocs

Install MkDocs within the activated environment (this only needs to be done once):

```bash
pip install mkdocs
```

### 4. Install mkdocs-material

Install mkdocs-material within the activated environment (this only needs to be done once):

```bash
pip install mkdocs-material
```

### 5. Install usefull plugins

Install usefull plugins within the activated environment (this only needs to be done once):

```bash
pip install mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin
```

### 6. Initialize the documentation

Run the following command to initialize the documentation:

```bash
mkdocs new .
```

