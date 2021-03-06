/**
 * プロパティ管理クラス
 */
function Properties() {
  this.props = PropertiesService.getDocumentProperties();  
}

/**
 * スペース／プロジェクトの表示
 */
Properties.prototype.getPrintSpaceProject = function() {
  var prop = this.props.getProperty("isPrintSpaceProject");
  if (prop == "true") {
    return true
  }
  return false;
};

/**
 * スペース／プロジェクトの表示
 */
Properties.prototype.setPrintSpaceProject = function(isPrint) {
  this.props.setProperty("isPrintSpaceProject", isPrint.toString());
};

/**
 * 行の最大サイズ
 * ※未使用
 */
Properties.prototype.getMaxRowSize = function() {
  var prop = this.props.getProperty("maxRowSize");
  return prop;
};

/**
 * 行の最大サイズ
 * ※未使用
 */
Properties.prototype.setMaxRowSize = function(size) {
  this.props.setProperty("maxRowSize", size);
};

/**
 * 行の折り返し
 */
Properties.prototype.getWrap = function() {
  var prop = this.props.getProperty("wrap");
  if (prop == "true") {
    return true
  }
  return false;
};

/**
 * 行の折り返し
 */
Properties.prototype.setWrap = function(isWrap) {
  this.props.setProperty("wrap", isWrap.toString());
};

/**
 * 自動読み込み
 */
Properties.prototype.getAutoLoad = function() {
  var prop = this.props.getProperty("autoLoad");
  if (prop == "true") {
    return true
  }
  return false;
};

/**
 * 自動読み込み
 */
Properties.prototype.setAutoLoad = function(isAuto) {
  this.props.setProperty("autoLoad", isAuto.toString());
};

/**
 * 自動バックアップ
 */
Properties.prototype.getAutoBackup = function() {
  var prop = this.props.getProperty("autoBackup");
  if (prop == "true") {
    return true
  }
  return false;
};

/**
 * 自動バックアップ
 */
Properties.prototype.setAutoBackup = function(isBackup) {
  this.props.setProperty("autoBackup", isBackup.toString());
};

/**
 * ライブラリ自身かどうか（デバッグ用）
 */
Properties.prototype.getOwner = function() {
  var prop = this.props.getProperty("owner");
  if (prop == "true") {
    return true
  }
  return false;
};

/**
 * ライブラリ自身かどうか（デバッグ用）
 */
Properties.prototype.setOwner = function(isOwn) {
  this.props.setProperty("owner", isOwn.toString());
};