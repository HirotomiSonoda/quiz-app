# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

quiz-app は一般常識クイズアプリです。ビルドツールやフレームワークを使わない、素の HTML/CSS/JavaScript のみで構成される静的サイトとして実装します。

## 開発コマンド

- ビルド不要・パッケージマネージャー不要（`package.json` は使用しない）
- 動作確認は `index.html` をブラウザで直接開くか、簡易HTTPサーバーで配信して行う
  - 例: `python -m http.server` などをプロジェクトルートで実行し、ブラウザで `http://localhost:8000` にアクセス
- 自動テストの仕組みは現時点では導入していない

## アーキテクチャ

現時点でファイルはまだ存在しない。実装時は以下の3ファイル構成を基本とする:

- `index.html` — クイズ画面のマークアップ（問題表示、選択肢、スコア表示など）
- `style.css` — 見た目のスタイリング
- `script.js` — クイズのロジック（問題データ、出題・採点・結果表示などの状態管理）

すべてクライアントサイドで完結させ、サーバーサイド処理は行わない想定。

## 命名規則

- ファイル名に日付を含める場合は `YYYYMMDD` 形式にする（例: `questions_20260705.json`）
